import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ComposantService} from '../../services/composant.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  formes: Array<any>;
  forme: any = null;
  materiaux: any = null;

  constructor(private composantService: ComposantService) { }

  ngOnInit() {
    this.composantService.getAllFormes().subscribe(response => {
      this.formes = response;
    });
  }

}
