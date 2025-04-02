export class Soiree {
    id!: number;
    nom!: string;
    lieu!: string;
    date!: Date;
    prix!: number;
    capacite!: number;
    theme!: string;

    constructor(id: number, nom: string, lieu: string, dateHeure: Date, prixEntree: number, capaciteMax: number, theme: string) {
        this.id = id;
        this.nom = nom;
        this.lieu = lieu;
        this.date = dateHeure;
        this.prix = prixEntree;
        this.capacite = capaciteMax;
        this.theme = theme;
    }
}