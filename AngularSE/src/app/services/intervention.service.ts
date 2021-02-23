import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Intervention} from "../models/intervention";
import {catchError, tap} from "rxjs/operators";

const getinterventionUrl = 'http://localhost:8080/intervention/getInterventionById/';
const getinterventionstatusUrl = 'http://localhost:8080/intervention/getInterventionByStatus/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) { }



  getInterventionById(idIntervention: string): Observable<Intervention> {
    return this.http.get<Intervention>( getinterventionUrl + idIntervention).pipe(tap(_ => console.log('get intervention by id')),
      catchError(this.handleError<Intervention>('getInterventionById'))
    );
  }

  getInterventionByStatus(status: string): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(getinterventionstatusUrl + status).pipe(tap(_ => console.log('get intervention by status')),
      catchError(this.handleError<Intervention[]>('getInterventionByStatus', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
