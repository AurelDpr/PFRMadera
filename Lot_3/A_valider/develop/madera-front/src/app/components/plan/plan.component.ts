import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPlan(path) {
    this.router.navigate([path]);
  }

}
