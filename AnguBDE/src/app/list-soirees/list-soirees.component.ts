import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { Soiree } from '../models/soiree.model';
import { SoireesService } from '../services/soirees.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/input';

// Imports supplémentaires pour les composants Material 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-list-soirees',
  standalone: true,
  templateUrl: './list-soirees.component.html',
  imports: [
    MatCardModule, 
    MatChipsModule, 
    MatProgressBarModule, 
    MatIconModule, 
    CommonModule, 
    RouterModule, 
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  styleUrl: './list-soirees.component.scss'
})
export class ListSoireesComponent implements OnInit{
  dataSource!: Soiree[];
  filteredDataSource: any[] = []; // Pour stocker les résultats filtrés
  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private mySoireesService: SoireesService) {}

  ngOnInit() {
    this.mySoireesService.getSoirees().subscribe(soirees => {
      this.dataSource = soirees;
      this.filteredDataSource = soirees; // Initialement, montrez toutes les soirées
    });
  }

  filterSoirees() {
    if (!this.searchText) {
      this.filteredDataSource = this.dataSource;
      return;
    }
    
    const searchTermLower = this.searchText.toLowerCase();
    this.filteredDataSource = this.dataSource.filter(soiree => 
      soiree.nom.toLowerCase().includes(searchTermLower) ||
      soiree.theme.toLowerCase().includes(searchTermLower) ||
      soiree.lieu.toLowerCase().includes(searchTermLower)
    );
  }

  clearSearch() {
    this.searchText = '';
    this.filterSoirees();
  }
}
