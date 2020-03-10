import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanService} from '../../services/plan.service';
import {Projet} from '../../models/Projet';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertService} from "../../services/alert.service";
import {Plan} from "../../models/Plan";

@Component({
  selector: 'app-gestion-plan',
  templateUrl: './gestion-plan.component.html',
  styleUrls: ['./gestion-plan.component.scss']
})
export class GestionPlanComponent implements OnInit {

  plans: Array<Plan>;
  searchPlans: Array<Plan>;
  projetId: number;
  currentPlan: Plan = null;
  search = '';
  isExistPlan = false;

  constructor(
    private planService: PlanService,
    private modalService: NgbModal,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projetId = Number(this.route.snapshot.paramMap.get('projetId'));
    if (window.localStorage.getItem('Plans') !== null) {
      this.plans = JSON.parse(window.localStorage.getItem('Plans')).filter(plan => plan.project_id === this.projetId);
      this.searchPlans = JSON.parse(window.localStorage.getItem('Plans')).filter(plan => plan.project_id === this.projetId);
    } else {
      this.planService.getAllPlans().subscribe(response => {
        this.plans = response.filter(plan => plan.project_id === this.projetId);
        this.searchPlans = response.filter(plan => plan.project_id === this.projetId);
        window.localStorage.setItem('Plans', JSON.stringify(response));
      });
    }
  }

  selectPlan(plan: any) {
    this.currentPlan = plan;
  }

  setPlan(modal) {
    if (!this.isExistPlan) {
      this.planService.createPlan(this.currentPlan).subscribe(response => {
        this.plans.push(response.plan);
        window.localStorage.setItem('Plans', JSON.stringify(this.plans));
        this.onSearch();
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    } else {
      this.planService.updatePlan(this.currentPlan).subscribe(response => {
        this.plans[this.plans.findIndex(plan => plan.id === response.plan.id)] = response.plan;
        window.localStorage.setItem('Plans', JSON.stringify(this.plans));
        this.onSearch();
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    }

    modal.close('Close click');
  }

  createPlan(content) {
    this.currentPlan = new Plan();
    this.currentPlan.project_id = this.projetId;
    this.isExistPlan = false;
    this.openWindowCustomClass(content);
  }

  openPlan(path) {
    this.router.navigate([path]);
  }

  onSearch() {
    this.searchPlans = this.plans.filter(plan => plan.label.includes(this.search));
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { centered: true });
  }
}

