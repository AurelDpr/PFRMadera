<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = ['label', 'project_id', 'modulesPlanIdList'];
}
