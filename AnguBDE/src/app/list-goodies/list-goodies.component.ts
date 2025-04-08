import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GoodiesService } from '../services/goodies.service';
import { Goodies } from '../models/goodies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-goodies',
  templateUrl: './list-goodies.component.html',
  styleUrls: ['./list-goodies.component.scss'],
  imports: [RouterModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule],
})
export class ListGoodiesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nom', 'quantite', 'description', 'cout', 'action'];
  dataSource = new MatTableDataSource<Goodies>([]);
  goodiesActuel!: Goodies;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private myGoodiesService: GoodiesService, private router: Router) {}

  ngOnInit() {
    // Charger les données des goodies lors de l'initialisation du composant
    this.loadGoodies();
  }

  ngAfterViewInit() {
    // Assigner paginator et sort après que la vue soit chargée
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadGoodies(): void {
    // Récupérer les goodies et les assigner à la source de données
    this.myGoodiesService.getGoodies().subscribe((goodies: Goodies[]) => {
      this.dataSource.data = goodies;
      
      // Vérifier si paginator et sort existent avant de les assigner
      if (this.paginator && this.sort) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteGoodie(id: number): void {
    // Supprimer un goodie et recharger les goodies après la suppression
    this.myGoodiesService.deleteGoodie(id).subscribe({
      next: () => {
        console.log('Goodie supprimé avec succès');
        // Recharger les goodies après suppression
        this.loadGoodies();
      },
      error: err => {
        console.error('Erreur lors de la suppression du goodie : ' + (err.error?.message || JSON.stringify(err)));
        alert('Une erreur est survenue : ' + (err.error?.message || JSON.stringify(err)));
      }
    });
  }
}