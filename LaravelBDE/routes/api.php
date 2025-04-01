<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SoireesController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\GoodiesController;

Route::apiResource('soirees', SoireesController::class);
Route::apiResource('reservations', ReservationController::class);
Route::apiResource('goodies', GoodiesController::class);