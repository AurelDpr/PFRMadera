import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../services/module.service';
import {ModulePlanService} from '../../services/module-plan.service';
import {ActivatedRoute} from '@angular/router';
import {PlanService} from '../../services/plan.service';
import {Plan} from '../../models/Plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  module = {
    module_id: null,
    quantite: 0
  };
  modules: Array<any>;
  modulesPlan: Array<any> = [];
  planId: number;
  plan: Plan;

  constructor(
    private moduleService: ModuleService,
    private modulePlanService: ModulePlanService,
    private planService: PlanService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.planId = Number(this.route.snapshot.paramMap.get('planId'));

    this.planService.getPlanById(this.planId).subscribe(response => {
      this.plan = response;
    });

    if (window.localStorage.getItem('Modules') !== null) {
      this.modules = JSON.parse(window.localStorage.getItem('Modules'));
    } else {
      this.moduleService.getAllModules().subscribe(response => {
        this.modules = response;
        window.localStorage.setItem('Modules', JSON.stringify(this.modules));
      });
    }
  }

  addNbModule() {
    this.modulesPlan.push(this.module);
  }

  save() {
    if ( this.plan.modulesPlanIdList.length > 0 ) {
      this.plan.modulesPlanIdList.forEach((modulePlanId, index) => {
        this.modulePlanService.deleteModulePlan(modulePlanId).subscribe(response => {
          this.plan.modulesPlanIdList.splice(index, 1);
        });
      });
    }

    this.modulesPlan.forEach(modulePlan => {
      this.modulePlanService.createModule(modulePlan).subscribe(response => {
        console.log(response);
      });
    });
  }

}
