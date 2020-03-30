import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../services/module.service';
import {Module} from '../../models/Module';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  modules: Array<Module>;
  searchModules: Array<Module>;
  currentModule: Module;
  isExistModule = false;
  search = '';

  constructor(
    private moduleService: ModuleService,
    private modalService: NgbModal,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('Modules') !== null) {
      this.modules = JSON.parse(window.localStorage.getItem('Modules'));
      this.searchModules = JSON.parse(window.localStorage.getItem('Modules'));
    } else {
      this.moduleService.getAllModules().subscribe(response => {
        this.modules = response;
        this.searchModules = response;
        window.localStorage.setItem('Modules', JSON.stringify(this.modules));
      });
    }
  }

  selectModule(module) {
    this.currentModule = module;
  }

  setModule(modal) {
    if (!this.isExistModule) {
      this.moduleService.createModule(this.currentModule).subscribe(response => {
        this.modules.push(response.module);
        window.localStorage.setItem('Modules', JSON.stringify(this.modules));
        this.onSearch();
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    } else {
      this.moduleService.updateModule(this.currentModule).subscribe(response => {
        this.modules[this.modules.findIndex(module => module.id === response.module.id)] = response.module;
        window.localStorage.setItem('Modules', JSON.stringify(this.modules));
        this.onSearch();
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    }

    modal.close('Close click');
  }

  createModule(content) {
    this.currentModule = new Module();
    this.isExistModule = false;
    this.openWindowCustomClass(content);
  }

  onSearch() {
    this.searchModules = this.modules.filter(module => module.label.includes(this.search));
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { centered: true });
  }

}
