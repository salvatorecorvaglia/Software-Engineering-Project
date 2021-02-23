import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Assign} from "../models/assign";
import {catchError, tap} from "rxjs/operators";

const assignAgenturl = 'http://localhost:8080/assign/assignAgentToIntervention/';
const getassignbyidagentUrl = 'http://localhost:8080/assign/getAllAssignByIdAgent/';
const updateassignurl = 'http://localhost:8080/assign/updateAssign/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  constructor(private http: HttpClient) { }

  getAllAssignByIdAgent(idagent: string): Observable<Assign[]> {
    return this.http.get<Assign[]>(getassignbyidagentUrl + idagent).pipe(tap(_ => console.log('fetched assign')),
      catchError(this.handleError<Assign[]>('getAssignByIdAgent', [])));
  }


assignAgentToIntervention(idManager: string, idIntervention: string, idAgent: string, idUser: string, assign: Assign): Observable<Assign>{
  return this.http.post<Assign>(assignAgenturl + idManager + '?idIntervention=' + idIntervention + '&idAgent=' + idAgent + '&idUser=' + idUser, assign, httpOptions).pipe(tap(_ => console.log('agent assigned')),
    catchError(this.handleError<Assign>('assignAgent')));
}

  updateAssign(idassign: string, assign: Assign): Observable<Assign> {
    return this.http.put<Assign>(updateassignurl + idassign, assign, httpOptions).pipe(tap(_ => console.log('updated assign')),
      catchError(this.handleError<Assign>('updateAssign')));
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
