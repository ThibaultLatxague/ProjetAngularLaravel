<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom_etudiant',
        'email_etudiant',
        'telephone_etudiant',
        'nom_soiree',
        'date_reservation',
        'statut',
        'goodies',
        'idSoiree',
    ];

    protected $casts = [
        'goodies' => 'array',
    ];

    public function soiree()
    {
        return $this->belongsTo(soiree::class);
    }
}
