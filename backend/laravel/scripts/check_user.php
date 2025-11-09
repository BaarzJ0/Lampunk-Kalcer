<?php
// Quick script to print user info for debugging login
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\User;

$email = $argv[1] ?? 'lekemotiga@contoh.com';
$user = User::where('email', $email)->first();
if (!$user) {
    echo "User not found: $email\n";
    exit(1);
}

$data = $user->toArray();
// hide some attributes or print everything
echo "Found user:\n";
echo "id: {$data['id']}\n";
echo "email: {$data['email']}\n";
echo "name: {$data['name']}\n";

// Password may be hidden; get directly from model attributes
$passwordHash = $user->getAuthPassword();
echo "password_hash: {$passwordHash}\n";

// Check password verify against admin123
$plain = 'admin123';
if (password_verify($plain, $passwordHash)) {
    echo "Password 'admin123' MATCHES the stored hash.\n";
} else {
    echo "Password 'admin123' DOES NOT match the stored hash.\n";
}

// Print created_at
if (isset($data['created_at'])) echo "created_at: {$data['created_at']}\n";

return 0;
