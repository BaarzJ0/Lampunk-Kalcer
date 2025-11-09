<?php

// TAMBAHKAN 'USE' STATEMENTS INI DI BAGIAN ATAS
use App\Http\Controllers\AuthController; // Ganti jika nama Controller Anda beda
use App\Http\Controllers\NewsController; // Ganti jika nama Controller Anda beda
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Rute untuk registrasi dan login
// (Anda bisa hapus 'register' jika tidak perlu)
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']); // <-- INI YANG UTAMA

Route::get('/news', [NewsController::class, 'index']);

// Rute yang diproteksi (butuh token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    
    // Ini adalah rute bawaan, biarkan saja
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Rute untuk News (berita)
    Route::post('/news', [NewsController::class, 'store']); // Rute dari instruksi Anda
    // Tambahkan rute lain di sini (get, update, delete news)
    // Update & delete untuk news (diproteksi)
    Route::put('/news/{id}', [NewsController::class, 'update']);
    Route::delete('/news/{id}', [NewsController::class, 'destroy']);
});