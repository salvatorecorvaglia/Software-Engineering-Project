import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Agent} from "../models/agent";
import {catchError, tap} from "rxjs/operators";

const getagentbyidUrl = 'http://localhost:8080/agent/getAgent/';
const getUrl = 'http://localhost:8080/agent/getAllAgent';
const getAgentFromPositionUrl = 'http://localhost:8080/agent/getAgentByPosition';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }


  getAgentById(idagent: string): Observable<Agent> {
    return this.http.get<Agent>(getagentbyidUrl + idagent).pipe(tap(_ => console.log('fetched agent')),
      catchError(this.handleError<Agent>('getCitizen')));
  }

  getAllAgent(): Observable<Agent[]> {
    return this.http.get<Agent[]>(getUrl).pipe(tap(_ => console.log('fetched agents')),
      catchError(this.handleError<Agent[]>('getAgents'))
    );
  }

  getAgentByGpsLocation(lat: number, lon: number, distance: number): Observable<Agent[]> {
    return this.http.get<Agent[]>(getAgentFromPositionUrl + '?lat=' + lat + '&lon=' + lon + '&distance=' + distance).pipe(tap(_ => console.log('fetched agent')),
      catchError(this.handleError<Agent[]>('getAgentByPosition'))
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
