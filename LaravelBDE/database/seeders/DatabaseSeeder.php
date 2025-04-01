<?php

namespace Database\Seeders;

use App\Models\goodies;
use App\Models\reservation;
use App\Models\soirees;
use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        goodies::create([
            'nom' => 'T-shirt',
            'quantite' => 100,
            'description' => 'T-shirt de l\'association',
            'coutUnitaire' => 10,
        ]);
        goodies::create([
            'nom' => 'Mug',
            'quantite' => 50,
            'description' => 'Mug de l\'association',
            'coutUnitaire' => 5,
        ]);
        goodies::create([
            'nom' => 'Stickers',
            'quantite' => 200,
            'description' => 'Stickers de l\'association',
            'coutUnitaire' => 2,
        ]);
        goodies::create([
            'nom' => 'Sweat',
            'quantite' => 30,
            'description' => 'Sweat de l\'association',
            'coutUnitaire' => 25,
        ]);
        goodies::create([
            'nom' => 'Casquette',
            'quantite' => 75,
            'description' => 'Casquette de l\'association',
            'coutUnitaire' => 15,
        ]);
        goodies::create([
            'nom' => 'Sac',
            'quantite' => 60,
            'description' => 'Sac de l\'association',
            'coutUnitaire' => 20,
        ]);
        goodies::create([
            'nom' => 'Bracelet',
            'quantite' => 200,
            'description' => 'Bracelet officiel de la soirée',
            'coutUnitaire' => 2,
        ]);
        
        goodies::create([
            'nom' => 'T-shirt',
            'quantite' => 100,
            'description' => 'T-shirt de l\'association',
            'coutUnitaire' => 10,
        ]);
        
        goodies::create([
            'nom' => 'Casquette',
            'quantite' => 50,
            'description' => 'Casquette édition limitée',
            'coutUnitaire' => 8,
        ]);
        
        goodies::create([
            'nom' => 'Lunettes',
            'quantite' => 75,
            'description' => 'Lunettes fluo pour la Beach Party',
            'coutUnitaire' => 5,
        ]);
        
        goodies::create([
            'nom' => 'Sac',
            'quantite' => 30,
            'description' => 'Sac en tissu réutilisable',
            'coutUnitaire' => 6,
        ]);
        
        goodies::create([
            'nom' => 'Porte-clé',
            'quantite' => 150,
            'description' => 'Porte-clé souvenir de l’événement',
            'coutUnitaire' => 3,
        ]);

        /*---------------------------------------------------------------------*/

        soirees::create([
            'nom' => 'Soirée d\'ouverture',
            'lieu' => 'Amphi A',
            'date' => now(),
            'prix' => 10,
            'capacite' => 100,
            'theme' => 'Ouverture de l\'année scolaire',
        ]);
        soirees::create([
            'nom' => 'Soirée de Noël',
            'lieu' => 'Salle des fêtes',
            'date' => '2025-12-15',
            'prix' => 20,
            'capacite' => 200,
            'theme' => 'Noël',
        ]);
        soirees::create([
            'nom' => 'Soirée de fin d\'année',
            'lieu' => 'Amphi B',
            'date' => '2026-06-15',
            'prix' => 15,
            'capacite' => 150,
            'theme' => 'Fin d\'année scolaire',
        ]);
        soirees::create([
            'nom' => 'Soirée Halloween',
            'lieu' => 'Salle polyvalente',
            'date' => '2025-10-31',
            'prix' => 12,
            'capacite' => 120,
            'theme' => 'Halloween',
        ]); 

        /*---------------------------------------------------------------------*/

        Reservation::create([
            'idSoiree' => 1,
            'nom_etudiant' => 'Alice Dupont',
            'email_etudiant' => 'alice.dupont@example.com',
            'telephone_etudiant' => '0601020304',
            'nom_soiree' => 'Soirée Étudiante',
            'date_reservation' => Carbon::now(),
            'statut' => 'Confirmée',
            'goodies' => json_encode(['Bracelet' => 1, 'T-shirt' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 2,
            'nom_etudiant' => 'Jean Martin',
            'email_etudiant' => 'jean.martin@example.com',
            'telephone_etudiant' => '0612345678',
            'nom_soiree' => 'Soirée Karaoké',
            'date_reservation' => Carbon::now()->subDays(2),
            'statut' => 'En attente',
            'goodies' => json_encode(['Casquette' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 3,
            'nom_etudiant' => 'Emma Bernard',
            'email_etudiant' => 'emma.bernard@example.com',
            'telephone_etudiant' => '0622334455',
            'nom_soiree' => 'Soirée Beach Party',
            'date_reservation' => Carbon::now()->subDays(5),
            'statut' => 'Annulée',
            'goodies' => json_encode(['Sac' => 1, 'Lunettes' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 1,
            'nom_etudiant' => 'Lucas Morel',
            'email_etudiant' => 'lucas.morel@example.com',
            'telephone_etudiant' => '0655667788',
            'nom_soiree' => 'Soirée Étudiante',
            'date_reservation' => Carbon::now()->subHours(10),
            'statut' => 'Confirmée',
            'goodies' => json_encode(['Porte-clé' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 2,
            'nom_etudiant' => 'Sophie Lambert',
            'email_etudiant' => 'sophie.lambert@example.com',
            'telephone_etudiant' => '0677889900',
            'nom_soiree' => 'Soirée Karaoké',
            'date_reservation' => Carbon::now()->subDays(3),
            'statut' => 'En attente',
            'goodies' => json_encode([]),
        ]);
        
        Reservation::create([
            'idSoiree' => 3,
            'nom_etudiant' => 'Nicolas Lefevre',
            'email_etudiant' => 'nicolas.lefevre@example.com',
            'telephone_etudiant' => '0611223344',
            'nom_soiree' => 'Soirée Beach Party',
            'date_reservation' => Carbon::now()->subDays(7),
            'statut' => 'Confirmée',
            'goodies' => json_encode(['T-shirt' => 1, 'Bracelet' => 1, 'Casquette' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 1,
            'nom_etudiant' => 'Marie Dubois',
            'email_etudiant' => 'marie.dubois@example.com',
            'telephone_etudiant' => '0633445566',
            'nom_soiree' => 'Soirée Étudiante',
            'date_reservation' => Carbon::now()->subHours(20),
            'statut' => 'Annulée',
            'goodies' => json_encode(['Sac' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 2,
            'nom_etudiant' => 'Thomas Petit',
            'email_etudiant' => 'thomas.petit@example.com',
            'telephone_etudiant' => '0644556677',
            'nom_soiree' => 'Soirée Karaoké',
            'date_reservation' => Carbon::now(),
            'statut' => 'Confirmée',
            'goodies' => json_encode(['Lunettes' => 1]),
        ]);
        
        Reservation::create([
            'idSoiree' => 3,
            'nom_etudiant' => 'Laura Richard',
            'email_etudiant' => 'laura.richard@example.com',
            'telephone_etudiant' => '0655667788',
            'nom_soiree' => 'Soirée Beach Party',
            'date_reservation' => Carbon::now()->subDays(1),
            'statut' => 'En attente',
            'goodies' => json_encode([]),
        ]);
        
        Reservation::create([
            'idSoiree' => 1,
            'nom_etudiant' => 'Alexandre Fontaine',
            'email_etudiant' => 'alexandre.fontaine@example.com',
            'telephone_etudiant' => '0677889900',
            'nom_soiree' => 'Soirée Étudiante',
            'date_reservation' => Carbon::now()->subDays(2),
            'statut' => 'Confirmée',
            'goodies' => json_encode(['Bracelet' => 1]),
        ]);        
    }
}
