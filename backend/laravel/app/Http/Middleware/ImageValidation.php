<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImageValidation
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            
            // Validate file size (10MB = 10 * 1024 * 1024 bytes)
            if ($file->getSize() > 10 * 1024 * 1024) {
                return response()->json([
                    'message' => 'Image size must not exceed 10MB'
                ], 400);
            }

            // Validate image dimensions and format
            $image = Image::make($file);
            $width = $image->width();
            $height = $image->height();

            // Check if aspect ratio is approximately 3:4 (with small tolerance)
            $aspectRatio = $width / $height;
            $targetRatio = 3 / 4;
            $tolerance = 0.1;

            if (abs($aspectRatio - $targetRatio) > $tolerance) {
                return response()->json([
                    'message' => 'Image must have a 3:4 aspect ratio'
                ], 400);
            }
        }

        return $next($request);
    }
}