import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../services/projet.service';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.scss']
})
export class GestionProjetComponent implements OnInit {

  projets: Array<any>;
  searchProjets: Array<any>;
  projet: any = null;
  search = '';
  colors = ['yellow', 'blue', 'green', 'red'];

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
    this.projetService.getAllProjets().subscribe(response => {
      this.projets = response;
      this.searchProjets = response;
    });
  }

  selectProjet(projet: any) {
    this.projet = projet;
  }

  createProjet() {

  }

  onSearch() {
    // tslint:disable-next-line:max-line-length
    this.searchProjets = this.projets.filter(projet => projet.label.includes(this.search) ||
      projet.client.nom.includes(this.search) ||
      projet.client.prenom.includes(this.search));
  }

}
