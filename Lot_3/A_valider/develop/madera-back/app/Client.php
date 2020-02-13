<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['nom', 'prenom', 'phone', 'email', 'adresse', 'codePostal', 'ville'];
}
