import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../services/reservations.service';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // mat-option est ici

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule],
})
export class ReservationsComponent {
  formulaire!: FormGroup;
  currentReservation!: Reservation;
  newReservation!: Reservation;

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationsService, private router: Router) {  }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.minLength(2)]],
      email_etudiant: [null, [Validators.required, Validators.email]],
      telephone_etudiant: [null, [Validators.required, Validators.pattern(/^0[6-7]\d{8}$/)]],
      nom_soiree: [null, [Validators.required, Validators.minLength(2)]],
      date_reservation: [null, [Validators.required]],
      statut: [null, [Validators.required]],
      goodies: [null, [Validators.required]],
      coutUnitaire: [null, [Validators.required, Validators.min(0)]]
    });    

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentReservation = {
        id: 0,
        nomEtudiant: formValue.nom,
        email_etudiant : formValue.email_etudiant,
        telephone_etudiant: formValue.telephone_etudiant,
        nom_soiree: formValue.nom_soiree,
        date_reservation: formValue.date_reservation,
        statut: formValue.statut,
        goodies: formValue.goodies,
        idSoiree: formValue.coutUnitaire
      };
    });
  }

  
  addReservation(): void {
    this.newReservation = {
      id: 0,
      nomEtudiant: this.formulaire.get('nom')?.value,
      email_etudiant: this.formulaire.get('email_etudiant')?.value,
      telephone_etudiant: this.formulaire.get('telephone_etudiant')?.value,
      nom_soiree: this.formulaire.get('nom_soiree')?.value,
      date_reservation: this.formulaire.get('date_reservation')?.value,
      statut: this.formulaire.get('statut')?.value,
      goodies: this.formulaire.get('goodies')?.value,
      idSoiree: this.formulaire.get('coutUnitaire')?.value
    };    

    this.reservationService.addReservation(this.newReservation).subscribe({
      next: goodie => {
        this.router.navigateByUrl('/reservations');
      },
      error: err => {
        console.error('Observable ajout Reservation a émis une erreur : ' + + (err.error?.message || JSON.stringify(err)));      }
    })
  }
}
