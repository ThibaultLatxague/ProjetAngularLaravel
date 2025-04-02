export class Goodies {
    id!: number;
    nom!: string;
    quantite!: number;
    description!: string;
    coutUnitaire?: number;

    constructor(id: number, nom: string, quantite: number, description: string, coutUnitaire?: number) {
        this.id = id;
        this.nom = nom;
        this.quantite = quantite;
        this.description = description;
        if (coutUnitaire !== undefined) {
            this.coutUnitaire = coutUnitaire;
        }
    }
}