import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';
import { Reservation } from '../models/reservation.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['../list-goodies/list-goodies.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, CommonModule, RouterModule,MatButtonModule],
})

export class ListReservationsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nom_etudiant', 'email_etudiant', 'telephone_etudiant', 'nom_soiree', 'date_reservation', 'statut', 'goodies', 'action'];
  dataSource = new MatTableDataSource<Reservation>([]);
  reservationId: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private reservationService: ReservationsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Charger les réservations lors de l'initialisation du composant
    this.loadReservations();

    // Récupérer l'ID du paramètre de la route
    const idParam = this.route.snapshot.paramMap.get('id');
    this.reservationId = idParam ? +idParam : null;
    console.log(this.reservationId);
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

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe({
      next: () => {
        // Recharger les données après suppression de la réservation
        this.loadReservations(); // Appeler cette méthode pour recharger les réservations
        this.router.navigateByUrl('/reservations');
      },
      error: err => {
        console.error('Erreur lors de la suppression de la réservation : ' + (err.error?.message || JSON.stringify(err)));
        alert('Une erreur est survenue : ' + (err.error?.message || JSON.stringify(err)));
      }
    });
  }

  loadReservations(): void {
    this.reservationService.getReservations().subscribe((reservations: Reservation[]) => {
      // Mettre à jour les données de source
      this.dataSource.data = reservations;
  
      // Traiter les goodies après la récupération des données
      this.dataSource.data.forEach((reservation: any) => {
        let goodiesStr = reservation.goodies;
  
        try {
          const goodies = JSON.parse(goodiesStr);
  
          if (Array.isArray(goodies) && goodies.length === 0) {
            reservation.goodies = 'Aucun goodies';
          } else if (goodies && typeof goodies === 'object') {
            reservation.goodies = Object.entries(goodies)
              .map(([key, value]) => `${key} (${value})`)
              .join(', ');
          } else {
            reservation.goodies = 'Aucun goodies';
          }
        } catch (e) {
          reservation.goodies = 'Aucun goodies';
        }
      });
  
      // Filtrer les réservations si un ID est spécifié dans la route
      if (this.reservationId !== null) {
        this.dataSource.data = reservations.filter(res => res.idSoiree === this.reservationId);
      } else {
        this.dataSource.data = reservations;
      }
  
      // Vérifier si paginator et sort existent avant de les assigner
      if (this.paginator && this.sort) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
}
