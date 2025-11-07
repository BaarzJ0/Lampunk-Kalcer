<?php

namespace App\Services;

use Exception;
use Illuminate\Http\UploadedFile;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageService
{
    /**
     * Process and upload an image
     *
     * @param UploadedFile $file
     * @param string $path
     * @return string
     * @throws Exception
     */
    public function processAndUpload(UploadedFile $file, string $path = 'uploads'): string
    {
        try {
            // Create an image instance
            $image = Image::make($file);
            
            // Get original dimensions
            $width = $image->width();
            $height = $image->height();
            
            // Calculate new dimensions to maintain 3:4 ratio
            $targetWidth = $width;
            $targetHeight = $height;
            
            if ($width / $height > 3/4) {
                // Image is too wide
                $targetWidth = (int) ($height * (3/4));
                // Center crop
                $x = (int) (($width - $targetWidth) / 2);
                $image->crop($targetWidth, $height, $x, 0);
            } else {
                // Image is too tall
                $targetHeight = (int) ($width * (4/3));
                // Center crop
                $y = (int) (($height - $targetHeight) / 2);
                $image->crop($width, $targetHeight, 0, $y);
            }
            
            // Resize if the image is too large
            $maxWidth = 1200;
            if ($image->width() > $maxWidth) {
                $image->resize($maxWidth, null, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                });
            }
            
            // Optimize the image
            $image->save(null, 80);
            
            // Generate unique filename
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            
            // Ensure directory exists
            $fullPath = "public/{$path}";
            if (!Storage::exists($fullPath)) {
                Storage::makeDirectory($fullPath);
            }
            
            // Store the processed image
            Storage::put("{$fullPath}/{$filename}", $image->encode());
            
            return "{$path}/{$filename}";
        } catch (Exception $e) {
            throw new Exception("Failed to process image: " . $e->getMessage());
        }
    }
    
    /**
     * Validate the image
     *
     * @param UploadedFile $file
     * @return array
     */
    public function validate(UploadedFile $file): array
    {
        $errors = [];
        
        try {
            // Check file size (10MB)
            if ($file->getSize() > 10 * 1024 * 1024) {
                $errors[] = 'Image size must not exceed 10MB';
            }
            
            // Check mime type
            $allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!in_array($file->getMimeType(), $allowedMimes)) {
                $errors[] = 'Only JPG and PNG images are allowed';
            }
            
            // Check image dimensions
            $image = Image::make($file);
            $width = $image->width();
            $height = $image->height();
            
            // Check aspect ratio (3:4 with tolerance)
            $aspectRatio = $width / $height;
            $targetRatio = 3 / 4;
            $tolerance = 0.1;
            
            if (abs($aspectRatio - $targetRatio) > $tolerance) {
                $errors[] = sprintf(
                    'Image must have a 3:4 aspect ratio. Current ratio is %.2f:1',
                    $aspectRatio
                );
            }
        } catch (Exception $e) {
            $errors[] = 'Failed to process image: ' . $e->getMessage();
        }
        
        return $errors;
    }
}