import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {

  clients: Array<any>;
  searchClients: Array<any>;
  client: any = null;
  search = '';

  constructor(private clientService: ClientService, private modalService: NgbModal) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(response => {
      this.clients = response;
      this.searchClients = response;
    });
  }

  selectClient(client: any) {
    this.client = client;
  }

  createClient() {

  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { centered: true });
  }

  onSearch() {
    this.searchClients = this.clients.filter(client => client.nom.includes(this.search) || client.prenom.includes(this.search));
  }
}
