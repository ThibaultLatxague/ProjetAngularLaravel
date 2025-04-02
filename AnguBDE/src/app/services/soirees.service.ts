import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soiree } from '../models/soiree.model';

@Injectable({
  providedIn: 'root'
})

export class SoireesService {
  constructor(private http: HttpClient) {}

  // On retourne le tableau de soirées
  getSoirees(): Observable<Soiree[]> {
    return this.http.get<Soiree[]>('http://localhost:8000/soirees');
  }

  // On retourne une soirée par son id
  getSoireeById(id: number): Observable<Soiree> {
    return this.http.get<Soiree>(`http://localhost:8000/soirees/${id}`);
  }

  // On ajoute une soirée
  addSoiree(soiree: Soiree): Observable<Soiree> {
    return this.http.post<Soiree>('http://localhost:8000/soirees', soiree);
  }

  // On met à jour une soirée
  updateSoiree(soiree: Soiree): Observable<Soiree> {
    return this.http.put<Soiree>(`http://localhost:8000/soirees/${soiree.id}`, soiree);
  }

  // On supprime une soirée
  deleteSoiree(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8000/soirees/${id}`);
  }
}
