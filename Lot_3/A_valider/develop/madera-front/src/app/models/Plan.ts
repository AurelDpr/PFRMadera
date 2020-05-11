export class Plan {
  id: number;
  label: string;
  project_id: number;
  modulesPlanIdList: Array<number>;

  // tslint:disable-next-line:align
  constructor() {
    this.label = '';
    this.project_id = null;
    this.modulesPlanIdList = [];
  }
}
