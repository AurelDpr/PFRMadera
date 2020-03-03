export class Projet {
  id: number;
  label: string;
  client_id: number;
  status: number;

  // tslint:disable-next-line:align
  constructor() {
    this.label = '';
    this.client_id = null;
    this.status = 0;
  }
}
