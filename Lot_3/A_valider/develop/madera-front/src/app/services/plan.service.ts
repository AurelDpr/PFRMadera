import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plan} from '../models/Plan';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};
const baseUrl = 'http://127.0.0.1:8000/api/plans';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  getAllPlans(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  getPlanById(planId: number): Observable<any> {
    return this.http.get<any>(baseUrl + '/' + planId);
  }

  createPlan(plan: Plan): Observable<any> {
    return this.http.post<any[]>(baseUrl + '/add', plan);
  }

  updatePlan(plan: Plan): Observable<any> {
    return this.http.put<any[]>(baseUrl + '/update', plan);
  }

  deletePlan(planId: number): Observable<any> {
    return this.http.delete<any[]>(baseUrl + '/delete/' + planId);
  }
}
