import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Type} from "../models/type";


const getUrl = 'http://localhost:8080/type/getAllType';
const postUrl = 'http://localhost:8080/type/addType/';
const updateUrl = 'http://localhost:8080/type/updateType/';
const deleteUrl = 'http://localhost:8080/type/deleteType/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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

  addType(idManager: string, typename: string, type: Type): Observable<Type> {
    return this.http.post<Type>(postUrl + idManager + '?name=' + typename, type, httpOptions).pipe(tap(_ => console.log('added type')),
      catchError(this.handleError<Type>('addType'))
    );
  }

  updateType(idType: string, idManager: string, typename: string, type: Type): Observable<Type> {
    return this.http.put<Type>( updateUrl + idType + '?idManager=' + idManager + '&name=' + typename, type, httpOptions).pipe(tap(_ => console.log('updated type')),
      catchError(this.handleError<Type>('updateType'))
    );
  }

  deleteType(idType: string): Observable<{}> {
    return  this.http.delete(deleteUrl + idType, httpOptions).pipe(tap(_ => console.log('eliminated type')),
      catchError(this.handleError<Type>('deleteType'))
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
