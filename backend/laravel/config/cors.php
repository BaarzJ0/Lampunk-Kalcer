<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Di sini Anda dapat mengkonfigurasi pengaturan untuk menangani
    | Cross-Origin Resource Sharing (CORS).
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:5173', // <-- PASTIKAN INI ADA
        'http://localhost:3000',
        'http://127.0.0.1:5500', 
    ],

    'allowed_origins' => [
        'http://localhost:3000',    // Alamat default React
        'http://localhost:5173',    // Alamat default Vue/Vite
        'http://127.0.0.1:5500',   // Alamat default VS Code Live Server
        'http://localhost:8080',    // Alamat frontend lain yang umum
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];