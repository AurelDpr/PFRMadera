import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Client} from '../../models/Client';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {

  clients: Array<Client>;
  searchClients: Array<Client>;
  currentClient: Client = null;
  search = '';
  isExistClient = false;

  constructor(private clientService: ClientService, private modalService: NgbModal) { }

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
      this.clients.push(this.currentClient);
    } else {

    }
    // this.onSearch();
    modal.close('Close click');
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
