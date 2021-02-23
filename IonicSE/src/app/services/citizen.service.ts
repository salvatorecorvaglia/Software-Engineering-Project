import { Injectable } from '@angular/core';
import {Citizen} from '../models/citizen';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../models/user';

const addcitizenUrl = 'http://localhost:8080/citizen/addCitizen';
const getcitizenbyidUrl = 'http://localhost:8080/citizen/getCitizenById/';
const updatecitizenpositionurl = 'http://localhost:8080/citizen/updatePosition/';
const updatecitizenurl = 'http://localhost:8080/citizen/updateCitizen/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private http: HttpClient) { }


  addCitizen(citizen: Citizen): Observable<Citizen> {
    return this.http.post<Citizen>( addcitizenUrl, citizen, httpOptions).pipe(tap(_ => console.log('added citizen')),
      catchError(this.handleError<Citizen>('addCitizen'))
    );
  }

  getCitizenById(idcitizen: string): Observable<Citizen> {
    return this.http.get<Citizen>(getcitizenbyidUrl + idcitizen).pipe(tap(_ => console.log('fetched citizen')),
      catchError(this.handleError<Citizen>('getCitizen')));
  }

  updatePosition(idcitizen: string, lat: number, lon: number, citizen: Citizen): Observable<Citizen> {
    return this.http.put<Citizen>(updatecitizenpositionurl + idcitizen + '?lat=' + lat + '&lon=' + lon, citizen, httpOptions ).pipe(tap(_ => console.log('updated position citizen')),
      catchError(this.handleError<Citizen>('updatePositionCitizen')));
  }

  updateCitizen(iduser: number, user: User): Observable<User> {
    return this.http.put<User>(updatecitizenurl + iduser, user, httpOptions).pipe(tap(_ => console.log('updated citizen')),
      catchError(this.handleError<User>('updateCitizen')));
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
