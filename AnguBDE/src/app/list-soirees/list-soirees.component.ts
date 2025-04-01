import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

export interface SoireeData {
  id: number;
  nom: string;
  lieu: string;
  date: string;
  prix: string;
  participants: string;
  theme: string;
}

const SOIREES: SoireeData[] = [
  {
    id: 1,
    nom: 'Soirée Étudiante',
    lieu: '3 rue du pont, Bayonne',
    date: '21/02/2025 à 13h30',
    prix: '12€',
    participants: '35',
    theme: 'Déguisé'
  },
  {
    id: 2,
    nom: 'Soirée Karaoké',
    lieu: '45 avenue des Champs, Paris',
    date: '15/03/2025 à 20h00',
    prix: '15€',
    participants: '50',
    theme: 'Années 80'
  },
  {
    id: 3,
    nom: 'Soirée Beach Party',
    lieu: '12 boulevard Sud, Toulouse',
    date: '10/04/2025 à 18h00',
    prix: '10€',
    participants: '70',
    theme: 'Fluo Party'
  }
];

@Component({
  selector: 'app-list-soirees',
  standalone: true,
  templateUrl: './list-soirees.component.html',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatIconModule, CommonModule, RouterModule, MatGridList],
  styleUrl: './list-soirees.component.scss'
})
export class ListSoireesComponent {
  soirees = SOIREES;
}
