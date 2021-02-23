import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Type} from '../models/type';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

const getUrl = 'http://localhost:8080/type/getAllType';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(getUrl).pipe(tap(_ => console.log('fetched types')),
      catchError(this.handleError<Type[]>('getTypes', []))
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
