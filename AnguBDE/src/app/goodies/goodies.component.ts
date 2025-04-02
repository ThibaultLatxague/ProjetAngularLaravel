import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoodiesService } from '../services/goodies.service';
import { Router } from '@angular/router';
import { Goodies } from '../models/goodies.model';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-goodies',
  standalone: true,
  templateUrl: './goodies.component.html',
  styleUrl: './goodies.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})

export class GoodiesComponent implements OnInit{
  formulaire!: FormGroup;
  currentGoodie!: Goodies;
  newGoodie!: Goodies;

  constructor(private formBuilder: FormBuilder, private goodieService: GoodiesService, private router: Router) {  }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.minLength(2)]],
      quantite: [null, [Validators.required, Validators.min(0)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      coutUnitaire: [null, [Validators.required, Validators.min(0)]]
    },
    // {updateOn: 'blur'} // Fais une update quand on sort d'un champ
    )

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentGoodie = {
        id: 0,
        nom: formValue.nom,
        quantite : formValue.quantite,
        description: formValue.description,
        coutUnitaire: formValue.coutUnitaire
      };
    });
  }

  
  addGoodie(): void {
    this.newGoodie = {
      id: 0,
      nom: this.formulaire.get('nom')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      description: this.formulaire.get('description')?.value,
      coutUnitaire: this.formulaire.get('coutUnitaire')?.value
    };

    this.goodieService.addGoodie(this.newGoodie).subscribe({
      next: goodie => {
        this.router.navigateByUrl('/goodies');
      },
      error: err => {
        console.error('Observable ajout Goodie a émis une erreur : ' + + (err.error?.message || JSON.stringify(err)));
        alert('Une erreur est survenue : ' + (err.error?.message || JSON.stringify(err)));
      }
    })
  }
}
