import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Image} from "../models/image";
import {catchError, tap} from "rxjs/operators";

const getImageByInterventionUrl = 'http://localhost:8080/image/getAllImageByIdIntervention/';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  getAllImageByIdIntervention(idIntervention: string): Observable<Image[]> {
    return this.http.get<Image[]>(getImageByInterventionUrl + idIntervention).pipe(tap(_ => console.log('fetched images')),
      catchError(this.handleError<Image[]>('getImages', []))
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
