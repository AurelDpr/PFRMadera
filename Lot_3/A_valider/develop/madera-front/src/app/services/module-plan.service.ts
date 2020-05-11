import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../models/Module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};
const baseUrl = 'http://127.0.0.1:8000/api/modulesplan';

@Injectable({
  providedIn: 'root'
})
export class ModulePlanService {

  constructor(private http: HttpClient) { }

  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  createModule(modulePlan: any): Observable<any> {
    return this.http.post<any[]>(baseUrl + '/add', modulePlan);
  }

  // updateModule(modulePlan: Module): Observable<any> {
  //   return this.http.put<any[]>(baseUrl + '/update', modulePlan);
  // }

  deleteModulePlan(modulePlanId: number): Observable<any> {
    return this.http.delete<any[]>(baseUrl + '/delete/' + modulePlanId);
  }
}
