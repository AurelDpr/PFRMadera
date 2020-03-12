import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Plan} from "../../models/Plan";
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {

  projetId: number;
  plans: Array<Plan>;
  filterPlans: Array<Plan>;

  constructor(
    private planService: PlanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projetId = Number(this.route.snapshot.paramMap.get('projetId'));
    if (window.localStorage.getItem('Plans') !== null) {
      this.plans = JSON.parse(window.localStorage.getItem('Plans')).filter(plan => plan.project_id === this.projetId);
      this.filterPlans = JSON.parse(window.localStorage.getItem('Plans')).filter(plan => plan.project_id === this.projetId);
    } else {
      this.planService.getAllPlans().subscribe(response => {
        this.plans = response.filter(plan => plan.project_id === this.projetId);
        this.filterPlans = response.filter(plan => plan.project_id === this.projetId);
        window.localStorage.setItem('Plans', JSON.stringify(response));
      });
    }
  }

}
