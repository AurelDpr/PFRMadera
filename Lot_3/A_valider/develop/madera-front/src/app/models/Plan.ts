export class Plan {
  id: number;
  label: string;
  project_id: number;

  // tslint:disable-next-line:align
  constructor() {
    this.label = '';
    this.project_id = null;
  }
}
