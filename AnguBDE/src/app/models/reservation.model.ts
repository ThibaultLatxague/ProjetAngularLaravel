export class Reservation {
    id!: number;
    nom_etudiant!: string;
    email_etudiant!: string;
    telephone_etudiant!: string;
    nom_soiree!: string;
    date_reservation!: Date;
    statut!: string;
    idSoiree!: number;
    goodies?: string;

    constructor(id: number, nomEtudiant: string, email: string, telephone: string, nomSoiree: string, dateReservation: Date, statut: string, idSoiree: number, goodies?: string) {
        this.id = id;
        this.nom_etudiant = nomEtudiant;
        this.email_etudiant = email;
        this.telephone_etudiant = telephone;
        this.nom_soiree = nomSoiree;
        this.date_reservation = dateReservation;
        this.statut = statut;
        if (goodies) {
            this.goodies = goodies;
        }
        this.idSoiree = idSoiree;
    }
}