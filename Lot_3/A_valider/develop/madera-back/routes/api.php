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
    Route::put('/clients/update', 'ClientController@update')->name('client.update');
    Route::get('/clients/{id}', 'ClientController@show')->name('client.show');
});

Route::namespace('Api')->group(function() {
    Route::apiResource('projets', 'ProjetController');
    Route::post('projets/add', 'ProjetController@store')->name('projet.store');
    Route::delete('projets/delete/{id}', 'ProjetController@destroy')->name('projet.destroy');
    Route::put('/projets/update', 'ProjetController@update')->name('projet.update');
    Route::get('/projets/{id}', 'ProjetController@show')->name('projet.show');
});

Route::namespace('Api')->group(function() {
    Route::apiResource('plans', 'PlanController');
    Route::post('plans/add', 'PlanController@store')->name('plan.store');
    Route::delete('plans/delete/{id}', 'PlanController@destroy')->name('plan.destroy');
    Route::put('/plans/update', 'PlanController@update')->name('plan.update');
    Route::get('/plans/{id}', 'PlanController@show')->name('plan.show');
});

Route::namespace('Api')->group(function() {
    Route::apiResource('modules', 'ModuleController');
    Route::post('modules/add', 'ModuleController@store')->name('module.store');
    Route::delete('modules/delete/{id}', 'ModuleController@destroy')->name('module.destroy');
    Route::put('/modules/update', 'ModuleController@update')->name('module.update');
    Route::get('/modules/{id}', 'ModuleController@show')->name('module.show');
});
