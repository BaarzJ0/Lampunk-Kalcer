<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

Route::get('/', function () {
    return view('welcome');
});

// Temporary route to create admin user
Route::get('/create-admin-user', function () {
    try {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'lekemotiga@contoh.com',
            'password' => Hash::make('admin123')
        ]);
        return response()->json(['message' => 'Admin user created successfully', 'user' => $user]);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
});
