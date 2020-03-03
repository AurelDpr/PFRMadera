import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../models/Projet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};
const baseUrl = 'http://127.0.0.1:8000/api/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getAllProjets(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  createProjet(projet: Projet): Observable<any> {
    return this.http.post<any[]>(baseUrl + '/add', projet);
  }

  updateProjet(projet: Projet): Observable<any> {
    return this.http.put<any[]>(baseUrl + '/update', projet);
  }

  deleteProjet(projetId: number): Observable<any> {
    return this.http.delete<any[]>(baseUrl + '/delete/' + projetId);
  }
}
