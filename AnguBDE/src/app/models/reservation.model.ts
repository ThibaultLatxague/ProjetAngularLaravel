export class Reservation {
    id!: number;
    nomEtudiant!: string;
    email!: string;
    telephone!: string;
    nomSoiree!: string;
    dateReservation!: Date;
    statut!: string;
    goodies?: string[];

    constructor(id: number, nomEtudiant: string, email: string, telephone: string, nomSoiree: string, dateReservation: Date, statut: string, goodies?: string[]) {
        this.id = id;
        this.nomEtudiant = nomEtudiant;
        this.email = email;
        this.telephone = telephone;
        this.nomSoiree = nomSoiree;
        this.dateReservation = dateReservation;
        this.statut = statut;
        if (goodies) {
            this.goodies = goodies;
        }
    }
}