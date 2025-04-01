<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class soirees extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'lieu',
        'date',
        'prix',
        'capacite',
        'theme',
    ];
}
