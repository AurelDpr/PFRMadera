import {Component, Input, OnInit} from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Client} from '../../models/Client';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {
  @Input() search = '';
  clients: Array<Client>;
  searchClients: Array<Client>;
  currentClient: Client = null;
  isExistClient = false;

  constructor(
    private clientService: ClientService,
    private modalService: NgbModal,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('Clients') !== null) {
      this.clients = JSON.parse(window.localStorage.getItem('Clients'));
      this.searchClients = JSON.parse(window.localStorage.getItem('Clients'));
    } else {
      this.clientService.getAllClients().subscribe(response => {
        this.clients = response;
        this.searchClients = response;
        window.localStorage.setItem('Clients', JSON.stringify(this.clients));
      });
    }
  }

  selectClient(client: any) {
    this.currentClient = client;
  }

  createClient(content) {
    this.currentClient = new Client();
    this.isExistClient = false;
    this.openWindowCustomClass(content);
  }

  editClient(content) {
    this.isExistClient = true;
    this.openWindowCustomClass(content);
  }

  setClient(modal) {
    if (!this.isExistClient) {
      this.clientService.createClient(this.currentClient).subscribe(response => {
        this.clients.push(response.client);
        window.localStorage.setItem('Clients', JSON.stringify(this.clients));
        this.onSearch();
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    } else {
      this.clientService.updateClient(this.currentClient).subscribe(response => {
        this.clients[this.clients.findIndex(client => client.id === response.client.id)] = response.client;
        window.localStorage.setItem('Clients', JSON.stringify(this.clients));
        this.onSearch();
        this.alertService.tempAlert(response.message, 5000, 'bg-success');
      });
    }
    modal.close('Close click');
  }

  deleteClient() {
    this.clientService.deleteClient(this.currentClient.id).subscribe(response => {
      this.currentClient = null;
      this.clients.splice(this.clients.findIndex(client => client.id === response.client.id), 1);
      window.localStorage.setItem('Clients', JSON.stringify(this.clients));
      this.alertService.tempAlert(response.message, 5000, 'bg-success');
    });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { centered: true });
  }

  closeWindowCustomClass(content) {
    this.modalService.dismissAll();
  }

  onSearch() {
    this.searchClients = this.clients.filter(client => client.nom.includes(this.search) || client.prenom.includes(this.search));
  }
}
