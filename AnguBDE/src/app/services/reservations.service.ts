import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})

export class ReservationsService {
  constructor(private http: HttpClient) {}

  // On retourne un tableau de réservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:8000/reservations');
  }

  // On retourne une réservation par son id
  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`http://localhost:8000/reservations/${id}`);
  }

  // On retourne les réservations d'un utilisateur par un objet reservation
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>('http://localhost:8000/reservations', reservation);
  }

  // On met à jour une réservation avec son id
  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`http://localhost:8000/reservations/${reservation.id}`, reservation);
  }

  // On supprime une réservation avec son id
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8000/reservations/${id}`);
  }
}
