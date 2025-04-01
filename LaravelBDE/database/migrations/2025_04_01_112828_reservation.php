<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('idSoiree')->constrained('soirees')->onDelete('cascade');
            $table->string('nom_etudiant');
            $table->string('email_etudiant');
            $table->string('telephone_etudiant');
            $table->string('nom_soiree');
            $table->dateTime('date_reservation');
            $table->enum('statut', ['Confirmée', 'En attente', 'Annulée'])->default('En attente');
            $table->json('goodies')->nullable(); // Stocke les goodies sous forme de JSON (ex: ["bracelet", "t-shirt"])
            $table->foreign('idSoiree')->references('id')->on('soirees')->onDelete('cascade');
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
