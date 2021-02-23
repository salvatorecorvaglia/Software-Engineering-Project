import { Injectable } from '@angular/core';
import {Alarm} from '../models/alarm';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const getUrl = 'http://localhost:8080/alarm/getAllAlarmByIdCitizen/';
const addAlarmUrl = 'http://localhost:8080/alarm/addAlarm';
const getAlarmsByIdCitizenUrl = 'http://localhost:8080/alarm/getAllAlarmByIdCitizen/';
const deleteUrl = 'http://localhost:8080/alarm/deleteAlarm/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private http: HttpClient) { }

  getAlarms(idcitizen: string): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(getUrl + idcitizen).pipe(tap(_ => console.log('fetched alarms')),
      catchError(this.handleError<Alarm[]>('getAlarms', []))
    );
  }

  addAlarm(idType: string, idCitizen: string, alarm: Alarm): Observable<Alarm> {
    return this.http.post<Alarm>(addAlarmUrl + '?idType=' + idType + '&idCitizen=' + idCitizen, alarm, httpOptions).pipe(tap(_ => console.log('added alarm')),
      catchError(this.handleError<Alarm>('addAlarm'))
    );
  }

  getAlarmsByIdCitizen(idcitizen: string): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(getAlarmsByIdCitizenUrl + idcitizen).pipe(tap(_ => console.log('fetched alarms')),
      catchError(this.handleError<Alarm[]>('getAlarmsByIdCitizen', []))
    );
  }

  deleteAlarm(idAlarm: string): Observable<{}> {
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


