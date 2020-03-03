import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../services/projet.service';
import {Router} from '@angular/router';
import {Client} from '../../models/Client';
import {ClientService} from '../../services/client.service';
import {Projet} from '../../models/Projet';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.scss']
})
export class GestionProjetComponent implements OnInit {
  clients: Array<Client>;
  projets: Array<any>;
  searchProjets: Array<any>;
  currentProjet: any = null;
  search = '';
  colors = ['yellow', 'blue', 'green', 'red'];
  isExistProjet = false;

  constructor(
    private projetService: ProjetService,
    private modalService: NgbModal,
    private clientService: ClientService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('Projets') !== null) {
      this.projets = JSON.parse(window.localStorage.getItem('Projets'));
      this.searchProjets = JSON.parse(window.localStorage.getItem('Projets'));
    } else {
      this.projetService.getAllProjets().subscribe(response => {
        this.projets = response;
        this.searchProjets = response;
        window.localStorage.setItem('Projets', JSON.stringify(this.projets));
      });
    }

    if (window.localStorage.getItem('Clients') !== null) {
      this.clients = JSON.parse(window.localStorage.getItem('Clients'));
    } else {
      this.clientService.getAllClients().subscribe(response => {
        this.clients = response;
        window.localStorage.setItem('Clients', JSON.stringify(this.clients));
      });
    }
  }

  selectProjet(projet: any) {
    this.currentProjet = projet;
  }

  openProjet(path) {
    this.router.navigate([path]);
  }

  setProjet(modal) {
    if (!this.isExistProjet) {
      this.projetService.createProjet(this.currentProjet).subscribe(response => {
        this.projets.push(response.client);
        window.localStorage.setItem('Projets', JSON.stringify(this.projets));
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    } else {
      this.projetService.updateProjet(this.currentProjet).subscribe(response => {
        this.projets[this.projets.findIndex(projet => projet.id === response.projet.id)] = response.projet;
        window.localStorage.setItem('Projets', JSON.stringify(this.projets));
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    }
    // this.onSearch();
    modal.close('Close click');
  }

  createProjet(content) {
      this.currentProjet = new Projet();
      this.isExistProjet = false;
      this.openWindowCustomClass(content);
  }

  onSearch() {
    // tslint:disable-next-line:max-line-length
    this.searchProjets = this.projets.filter(projet => projet.label.includes(this.search) ||
      projet.client.nom.includes(this.search) ||
      projet.client.prenom.includes(this.search));
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { centered: true });
  }

}
