import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

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

  constructor(private clientService: ClientService) { }

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

  onSearch() {
    this.searchClients = this.clients.filter(client => client.nom.includes(this.search) || client.prenom.includes(this.search));
  }
}
