<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User; // Pastikan Anda punya model User

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function login(Request $request)
    {
        // 1. Validasi input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Coba login
        if (!Auth::attempt($request->only('email', 'password'))) {
            // 3. Jika gagal, kirim error
            return response()->json([
                'message' => 'Kredensial tidak valid'
            ], 401); // 401 Unauthorized
        }

        // 4. Jika berhasil, cari user
        $user = User::where('email', $request['email'])->firstOrFail();

        // 5. Buat token baru
        $token = $user->createToken('auth_token')->plainTextToken;

        // 6. Kirim balasan sukses dengan token
        return response()->json([
            'message' => 'Login sukses',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    // Anda bisa tambahkan fungsi register di sini jika perlu
    // public function register(Request $request) { ... }
}