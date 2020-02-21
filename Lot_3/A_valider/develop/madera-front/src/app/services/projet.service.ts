import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getAllProjets(): Observable<any[]> {
    return this.http.get<any[]>('http://10.173.129.57/pfr-madera/public/api/projets');
  }
}
