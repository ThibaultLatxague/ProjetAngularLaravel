import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goodies } from '../models/goodies.model';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Requested-With': 'XMLHttpRequest'
  }),
  withCredentials: true // Important pour envoyer le token CSRF
};

@Injectable({
  providedIn: 'root'
})

export class GoodiesService {
  constructor(private http: HttpClient) {}

  // On retourne le tableau de goodies
  getGoodies(): Observable<Goodies[]> {
    return this.http.get<Goodies[]>('http://localhost:8000/goodies');
  }

  // On retourne un goodies par son id
  getGoodieById(id: number): Observable<Goodies> {
    return this.http.get<Goodies>(`http://localhost:8000/goodies/${id}`);
  }

  // On ajoute un goodies
  addGoodie(goodie: Goodies): Observable<Goodies> {
    return this.http.post<Goodies>('http://localhost:8000/goodies', goodie);
  }

  // On met à jour un goodies
  updateGoodie(goodie: Goodies): Observable<Goodies> {
    return this.http.put<Goodies>(`http://localhost:8000/goodies/${goodie.id}`, goodie);
  }

  // On supprime un goodies
  deleteGoodie(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8000/goodies/${id}`);
  }
}
