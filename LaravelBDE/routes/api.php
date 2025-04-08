<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\SoireesController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\GoodiesController;

Route::apiResource('soirees', SoireesController::class);
Route::apiResource('reservations', ReservationController::class);
Route::apiResource('goodies', GoodiesController::class);
Route::delete('/goodies/{id}', [GoodiesController::class, 'destroy']);