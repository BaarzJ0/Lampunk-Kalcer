<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    /**
     * Menyimpan berita baru ke database.
     */
    public function store(Request $request)
    {
        // 1. Validasi (termasuk validasi gambar)
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validasi file
        ]);

        $imagePath = null;

        // 2. Cek jika ada file gambar yang di-upload
        if ($request->hasFile('image')) {
            // 3. Simpan gambar ke 'storage/app/public/news_images'
            // dan dapatkan path-nya (misal: "news_images/namafile.jpg")
            $imagePath = $request->file('image')->store('news_images', 'public');
        }

        // 4. Buat berita di database
        $news = News::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'content' => $request->content,
            'image_path' => $imagePath, // 5. Simpan path gambar
        ]);

        // 6. (PENTING) Tambahkan URL lengkap ke data yang dikembalikan
        // Ini agar React tahu URL gambarnya
        if ($imagePath) {
            $news->image_url = asset('storage/' . $imagePath);
        }

        return response()->json([
            'message' => 'Berita berhasil dibuat',
            'data' => $news // Kirim data lengkap (termasuk image_url)
        ], 201);
    }

    /**
     * Menampilkan semua data berita.
     */
    public function index()
    {
        $news = News::latest()->get();

        // 7. Ubah data untuk menyertakan URL gambar lengkap
        $news->each(function($item) {
            if ($item->image_path) {
                // Ini akan menghasilkan URL: http://127.0.0.1:8000/storage/news_images/namafile.jpg
                $item->image_url = asset('storage/' . $item->image_path);
            } else {
                $item->image_url = null; // Tidak ada gambar
            }
        });

        return response()->json([
            'message' => 'Data berita berhasil diambil',
            'data' => $news
        ], 200);
    }

    /**
     * Update berita existing.
     */
    public function update(Request $request, $id)
    {
        $news = News::find($id);
        if (!$news) {
            return response()->json(['message' => 'Berita tidak ditemukan'], 404);
        }

        // Pastikan user yang mengubah adalah pemilik atau terotentikasi
        // (opsional) cek kepemilikan jika diperlukan

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // jika ada file gambar baru, simpan dan hapus yang lama
        if ($request->hasFile('image')) {
            // hapus file lama bila ada
            if ($news->image_path) {
                Storage::disk('public')->delete($news->image_path);
            }

            $imagePath = $request->file('image')->store('news_images', 'public');
            $news->image_path = $imagePath;
            $news->image_url = asset('storage/' . $imagePath);
        }

        $news->title = $request->title;
        $news->content = $request->content;
        $news->save();

        return response()->json(["message" => 'Berita berhasil diperbarui', 'data' => $news], 200);
    }

    /**
     * Hapus berita.
     */
    public function destroy($id)
    {
        $news = News::find($id);
        if (!$news) {
            return response()->json(['message' => 'Berita tidak ditemukan'], 404);
        }

        // hapus file gambar di storage jika ada
        if ($news->image_path) {
            Storage::disk('public')->delete($news->image_path);
        }

        $news->delete();

        return response()->json(['message' => 'Berita berhasil dihapus'], 200);
    }
}