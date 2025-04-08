import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { GoodiesService } from '../services/goodies.service';
import { Goodies } from '../models/goodies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-goodies',
  templateUrl: './list-goodies.component.html',
  styleUrl: './list-goodies.component.scss',
  imports: [RouterModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule],
})

export class ListGoodiesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nom', 'quantite', 'description', 'cout', 'action'];
  dataSource = new MatTableDataSource<Goodies>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private myGoodiesService: GoodiesService, private router: Router) {}

  ngOnInit() {
    this.myGoodiesService.getGoodies().subscribe((goodies: Goodies[]) => {
      this.dataSource.data = goodies;  
      
      // Vérifie si paginator et sort existent avant de les assigner
      if (this.paginator && this.sort) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  ngAfterViewInit() {
    // Déplace l'affectation ici pour être sûr que la Vue est bien chargée
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteGoodie(id: number): void {
    this.myGoodiesService.deleteGoodie(id).subscribe({
      next: () => {
        console.log('Goodie supprimé avec succès');
        this.router.navigateByUrl('/goodies');
      },
      error: err => {
        console.error('Observable suppression Goodie a émis une erreur : ' + + (err.error?.message || JSON.stringify(err)));
        alert('Une erreur est survenue : ' + (err.error?.message || JSON.stringify(err)));
      }
    })
  }
}