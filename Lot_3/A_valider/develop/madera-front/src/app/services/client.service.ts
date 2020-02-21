import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>('http://10.173.129.57/pfr-madera/public/api/clients');
  }

  createClient(client: Client): Observable<any[]> {
    return this.http.post<any[]>('http://10.173.129.57/pfr-madera/public/api/clients/add', client);
  }

  updateClient(client: Client): Observable<any[]> {
    return this.http.put<any[]>('http://10.173.129.57/pfr-madera/public/api/clients/update', client);
  }

  deleteClient(clientId: number): Observable<any[]> {
    return this.http.delete<any[]>('http://10.173.129.57/pfr-madera/public/api/clients/delete/' + clientId);
  }
}
