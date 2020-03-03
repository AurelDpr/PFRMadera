import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};
const baseUrl = 'http://127.0.0.1:8000/api/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  createClient(client: Client): Observable<any> {
    return this.http.post<any[]>(baseUrl + '/add', client);
  }

  updateClient(client: Client): Observable<any> {
    return this.http.put<any[]>(baseUrl + '/update', client);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete<any[]>(baseUrl + '/delete/' + clientId);
  }
}
