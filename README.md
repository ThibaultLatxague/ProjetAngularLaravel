# Projet BDE

## Application Angular / Laravel

Ce projet est une application web de gestion pour un Bureau des Étudiants (BDE), développée avec Angular en frontend et Laravel en backend. Le projet permet de gérer des réservations, des goodies, des soirées ainsi que d'autres fonctionnalités liées à l'organisation d'événements étudiants.

---

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Pré-requis](#pré-requis)
- [Installation](#installation)
  - [Backend (Laravel)](#backend-laravel)
  - [Frontend (Angular)](#frontend-angular)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)

---

## Fonctionnalités

- **Gestion des réservations**  
  - Visualisation de la liste des réservations.
  - Création manuelle d'une réservation (sans les goodies, mettre [] en donnée).
  - Filtrage des réservations par soirée (clic sur "voir les réservations" d'une soirée).
  - (BONUS) Annulation / suppression d'une réservation

- **Gestion des goodies**  
  - Affichage de la liste des goodies.
  - Ajout et suppression des goodies.
  - Modification du stock des goodies.
  - Barre de recherche des goodies.
  - Traitement et affichage formaté des goodies depuis un JSON.

- **Gestion des soirées**  
  - Visualisation des détails d'une soirée.
  - Barre de recherche des soirées.
  - Navigation vers une page dédiée pour consulter les réservations associées à une soirée donnée.

- **Interface utilisateur moderne**  
  - Utilisation d'Angular Material pour une interface responsive et ergonomique.

- **API RESTful côté backend**  
  - Développement en Laravel pour la gestion des appels API.
  - Persistance des données via une base de données MySQL.

---

## Pré-requis

### Backend (Laravel)
- PHP >= 8.0
- Composer
- Une base de données compatible MySQL.

### Frontend (Angular)
- Node.js (version 12 ou supérieure)
- npm
- Angular CLI

---

## Installation

### Backend (Laravel)

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/ThibaultLatxague/ProjetAngularLaravel.git
   cd ProjetAngularLaravel
   ```

2. **Configurer l'environnement :**

   Copier le fichier .env.example en .env :

   ```bash
   cp .env.example .env
   ```
   
   Puis, modifiez le fichier .env pour configurer les paramètres de la base de données et autres variables d'environnement.

3. **Installer les dépendances :**

   ```bash
   composer install
   ```

4. **Générer la clé de l'application :**

   ```bash
   php artisan key:generate
   ```

5. **Exécuter les migrations et les seeds :**

   ```bash
   php artisan migrate
   php artisan db:seed
   ```

6. **Démarrer le serveur Laravel :**

   ```bash
   php artisan serve
   ```

   L'API sera disponible par défaut sur http://localhost:8000.

### Frontend (Angular)

1. **Se rendre dans le dossier Angular** (s'il est séparé) ou rester à la racine du projet s'il n'y a qu'un seul dépôt :

   ```bash
   cd votre-dossier-angular
   ```

2. **Installer les dépendances npm :**

   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement Angular :**

   ```bash
   ng serve
   ```

   L'application Angular sera disponible sur http://localhost:4200.

---

## Utilisation

### Réservations :

- Naviguez vers `/reservations` pour visualiser la liste des réservations.
- Vous pouvez filtrer les réservations par soirée via l'URL, par exemple :
  ```
  http://localhost:4200/reservations/2
  ```

### Goodies :

- La page `/goodies` permet de visualiser, ajouter, modifier et supprimer des goodies.
- Les données goodies sont traitées pour afficher les informations de manière lisible à partir de leur format JSON.

### Soirées :

- Visualisez les détails de chaque soirée et naviguez vers une page dédiée pour consulter les réservations associées.

---

## Structure du projet

### Backend (Laravel) :

- `app/` – Modèles, contrôleurs et logique métier.
- `routes/api.php` – Définition des routes API.
- `database/` – Migrations et seeds.

### Frontend (Angular) :

- `src/app/` – Composants, services et modules Angular.
- `src/assets/` – Fichiers statiques (images, styles, etc.).
- Utilisation d'Angular Material et Flex Layout pour l'interface utilisateur.