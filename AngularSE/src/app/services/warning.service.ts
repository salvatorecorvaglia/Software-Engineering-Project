import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Alarm} from "../models/alarm";

const getUrl = 'http://localhost:8080/alarm/getAllAlarm';
const getAlarmsByIdInterventionUrl = 'http://localhost:8080/alarm/getAllAlarmByIdIntervention/';
const deleteUrl = 'http://localhost:8080/alarm/deleteAlarm/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  constructor(private http: HttpClient) { }

  getAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(getUrl).pipe(tap(_ => console.log('fetched alarms')),
      catchError(this.handleError<Alarm[]>('getAlarms', []))
    );
  }

  getAlarmsByIdIntervention(idintervention: string): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(getAlarmsByIdInterventionUrl + idintervention).pipe(tap(_ => console.log('fetched alarms')),
      catchError(this.handleError<Alarm[]>('getAlarmsByIdIntervention', []))
    );
  }

  deleteAlarm(idAlarm: number): Observable<{}> {
    return  this.http.delete(deleteUrl + idAlarm, httpOptions).pipe(tap(_ => console.log('eliminated alarm')),
      catchError(this.handleError<Alarm>('deleteAlarm'))
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
