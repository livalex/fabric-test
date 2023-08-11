<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poster extends Model
{
    public $timestamps = false;

    public function movie()
    {
        return $this->belongsTo('App\Models\Movie', 'imdbID', 'imdbID');
    }

    use HasFactory;
}
