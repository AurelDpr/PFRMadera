export class Projet {
  id: number;
  label: string;
  client_id: number;
  statut: number;

  // tslint:disable-next-line:align
  constructor() {
    this.label = '';
    this.client_id = null;
    this.statut = 0;
  }
}