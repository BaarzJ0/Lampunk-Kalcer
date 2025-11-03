<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

// Ini adalah baris-baris yang memperbaiki error Anda
use App\Models\News;
use App\Policies\NewsPolicy;
use App\Models\Gallery;
use App\Policies\GalleryPolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // Ini adalah policy yang Anda daftarkan
        News::class => NewsPolicy::class,
        Gallery::class => GalleryPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        //
    }
}