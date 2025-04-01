export class Soiree {
    id!: number;
    nom!: string;
    lieu!: string;
    dateHeure!: Date;
    prixEntree!: number;
    capaciteMax!: number;
    theme!: string;

    constructor(id: number, nom: string, lieu: string, dateHeure: Date, prixEntree: number, capaciteMax: number, theme: string) {
        this.id = id;
        this.nom = nom;
        this.lieu = lieu;
        this.dateHeure = dateHeure;
        this.prixEntree = prixEntree;
        this.capaciteMax = capaciteMax;
        this.theme = theme;
    }
}