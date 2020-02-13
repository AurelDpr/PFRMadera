<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    public function getClient()
    {
        return $this->belongsTo('App\Client');
    }
}
