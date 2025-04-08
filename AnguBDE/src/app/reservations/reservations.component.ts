import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../services/reservations.service';
import { SoireesService } from '../services/soirees.service';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { Soiree } from '../models/soiree.model';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, CommonModule],
})
export class ReservationsComponent {
  formulaire!: FormGroup;
  currentReservation!: Reservation;
  newReservation!: Reservation;
  listSoirees!: Soiree[];

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationsService, private soireeService: SoireesService, private router: Router) {  }

  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe((soirees: Soiree[]) => {
      this.listSoirees = soirees;
      console.log(this.listSoirees);
    });

    this.formulaire = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.minLength(2)]],
      email_etudiant: [null, [Validators.required, Validators.email]],
      telephone_etudiant: [null, [Validators.required, Validators.pattern(/^0[6-7]\d{8}$/)]],
      soiree: [null, Validators.required],
      date_reservation: [null, [Validators.required]],
      statut: [null, [Validators.required]],
      goodies: [null, [Validators.required]]
    });    

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentReservation = {
        id: 0,
        nomEtudiant: formValue.nom,
        email_etudiant : formValue.email_etudiant,
        telephone_etudiant: formValue.telephone_etudiant,
        nom_soiree: formValue.soiree.nom,
        date_reservation: formValue.date_reservation,
        statut: formValue.statut,
        goodies: formValue.goodies,
        idSoiree: formValue.soiree.id
      };
    });
  };

  
  addReservation(): void {
    this.newReservation = {
      id: 0,
      nomEtudiant: this.formulaire.get('nom')?.value,
      email_etudiant: this.formulaire.get('email_etudiant')?.value,
      telephone_etudiant: this.formulaire.get('telephone_etudiant')?.value,
      nom_soiree: this.formulaire.get('soiree')?.value.nom,
      date_reservation: this.formulaire.get('date_reservation')?.value,
      statut: this.formulaire.get('statut')?.value,
      goodies: this.formulaire.get('goodies')?.value,
      idSoiree: this.formulaire.get('soiree')?.value.id
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
