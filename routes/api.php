<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\UserController;

Route::get('/users', [UserController::class, 'index']);
