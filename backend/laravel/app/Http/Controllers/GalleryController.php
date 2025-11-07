<?php

namespace App\Http\Controllers;

use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    protected $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg|max:10240' // 10MB = 10240KB
        ]);

        $file = $request->file('image');
        
        // Validate image specs
        $errors = $this->imageService->validate($file);
        if (!empty($errors)) {
            return response()->json([
                'message' => 'Image validation failed',
                'errors' => $errors
            ], 400);
        }

        try {
            // Process and upload image
            $path = $this->imageService->processAndUpload($file, 'gallery');

            return response()->json([
                'message' => 'Image uploaded successfully',
                'path' => Storage::url($path)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to upload image',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}