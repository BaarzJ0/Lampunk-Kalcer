<?php

namespace App\Http\Controllers;

use App\Models\News; // Pastikan Anda punya model News
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input (contoh sederhana)
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        // Buat berita baru
        $news = News::create([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            // 'user_id' => auth()->id(), // Tambahkan ini jika berita terkait user
        ]);

        // Kirim balasan sukses
        return response()->json([
            'message' => 'Berita berhasil dibuat',
            'data' => $news
        ], 201); // 201 Created
    }

    public function index()
    {
        // 1. Ambil semua berita dari database, urutkan dari yang terbaru
        $news = News::latest()->get();

        // 2. Kembalikan data sebagai JSON
        return response()->json([
            'message' => 'Data berita berhasil diambil',
            'data' => $news
        ], 200);
    }

    // Method lain (index, show, update, destroy)
    // ...
}