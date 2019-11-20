import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-gestion-plan',
  templateUrl: './gestion-plan.component.html',
  styleUrls: ['./gestion-plan.component.scss']
})
export class GestionPlanComponent implements OnInit {

  plans: Array<any>;
  searchPlans: Array<any>;
  projetId: string;
  plan: any = null;
  search = '';

  constructor(
    private planService: PlanService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projetId = this.route.snapshot.paramMap.get('projetId');
    this.planService.getAllPlans().subscribe(response => {
      this.plans = response.filter(plan => plan.projetId === Number(this.projetId));
      this.searchPlans = response.filter(plan => plan.projetId === Number(this.projetId));
    });
  }

  selectPlan(plan: any) {
    this.plan = plan;
  }

  createPlan() {

  }

  openPlan(path) {
    this.router.navigate([path]);
  }

  onSearch() {
    this.searchPlans = this.plans.filter(plan => plan.label.includes(this.search));
  }
}

