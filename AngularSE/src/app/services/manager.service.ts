import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Manager} from "../models/manager";
import {catchError, tap} from "rxjs/operators";
import {Agent} from "../models/agent";

const getUrlm = 'http://localhost:8080/manager/getManagerById/';
const getUrla = 'http://localhost:8080/agent/getAllAgent';
const addagentUrl = 'http://localhost:8080/agent/addAgent/';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getManager(idManager): Observable<Manager> {
    return this.http.get<Manager>(getUrlm + idManager).pipe(tap(_ => console.log('fetched managers')),
      catchError(this.handleError<Manager>('getManager'))
    );
  }

  getAllAgents(): Observable<Agent[]> {
    return  this.http.get<Agent[]>(getUrla).pipe(tap(_ => console.log('fetched agents')),
      catchError(this.handleError<Agent[]>('getAllAgents', []))
    );
  }

  addAgent(idmanager: number, agent: Agent): Observable<Agent> {
    return this.http.post(addagentUrl + idmanager, agent, httpOptions).pipe(tap(_ => console.log('added agents')),
      catchError(this.handleError<Agent>('addAgent'))
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
