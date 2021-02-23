import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Agent} from '../models/agent';
import {User} from '../models/user';

const getagentbyidUrl = 'http://localhost:8080/agent/getAgent/';
const updateagentpositionurl = 'http://localhost:8080/agent/updatePosition/';
const updateagenturl = 'http://localhost:8080/agent/updateAgent/';

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

  updatePosition(idagent: string, lat: number, lon: number, agent: Agent): Observable<Agent> {
    return this.http.put<Agent>(updateagentpositionurl + idagent + '?lat=' + lat + '&lon=' + lon, agent, httpOptions ).pipe(tap(_ => console.log('updated position agent')),
      catchError(this.handleError<Agent>('updatePositionAgent')));
  }

  updateAgent(iduser: string, user: User): Observable<User> {
    return this.http.put<User>(updateagenturl + iduser, user, httpOptions).pipe(tap(_ => console.log('updated agent')),
      catchError(this.handleError<User>('updateAgent')));
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
