export class Client {
  id: number;
  nom: string;
  prenom: string;
  phone: string;
  email: string;
  adresse: string;
  codePostal: number;
  ville: string;

  // tslint:disable-next-line:align
  constructor() {
    this.nom = '';
    this.prenom = '';
    this.phone = '';
    this.email = '';
    this.adresse = '';
    this.codePostal = null;
    this.ville = '';
  }
}
