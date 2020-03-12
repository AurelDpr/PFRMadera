import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../models/Module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};
const baseUrl = 'http://127.0.0.1:8000/api/modules';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  createModule(module: Module): Observable<any> {
    return this.http.post<any[]>(baseUrl + '/add', module);
  }

  updateModule(module: Module): Observable<any> {
    return this.http.put<any[]>(baseUrl + '/update', module);
  }

  deleteModule(moduleId: number): Observable<any> {
    return this.http.delete<any[]>(baseUrl + '/delete/' + moduleId);
  }
}
