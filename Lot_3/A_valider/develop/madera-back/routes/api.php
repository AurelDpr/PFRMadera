<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::namespace('Api')->group(function() {
    Route::apiResource('clients', 'ClientController');
    Route::post('clients/add', 'ClientController@store')->name('client.store');
    Route::delete('clients/delete/{id}', 'ClientController@destroy')->name('client.destroy');
    Route::put('/clients/update', 'TaskController@update')->name('client.update');
});

Route::namespace('Api')->group(function() {
    Route::apiResource('projets', 'ProjetController');
});

Route::namespace('Api')->group(function() {
    Route::apiResource('plans', 'PlanController');
});
