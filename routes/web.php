<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/certificates', function () {
    return Inertia::render('Certificates');
});

Route::get('/card', function () {
    return Inertia::render('Card');
});

Route::get('/catalog', function () {
    return Inertia::render('Catalog');
});

Route::get('/card', function () {
    return Inertia::render('Card');
});
