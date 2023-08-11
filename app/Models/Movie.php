<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    public $timestamps = false;

    public function poster()
    {
        return $this->hasOne('App\Models\Poster', 'imdbID', 'imdbID');
    }

    use HasFactory;
}
