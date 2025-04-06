export class Reservation {
    id!: number;
    nomEtudiant!: string;
    email_etudiant!: string;
    telephone_etudiant!: string;
    nom_soiree!: string;
    date_reservation!: Date;
    statut!: string;
    idSoiree!: number;
    goodies?: string[];
    goodiesArray?: string[]; // Pour afficher les goodies sous forme de tableau dans la table

    constructor(id: number, nomEtudiant: string, email: string, telephone: string, nomSoiree: string, dateReservation: Date, statut: string, idSoiree: number, goodies?: string[]) {
        this.id = id;
        this.nomEtudiant = nomEtudiant;
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