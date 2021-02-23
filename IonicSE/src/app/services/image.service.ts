import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Image} from '../models/image';


const getImageByUserUrl = 'http://localhost:8080/image/getImage';
const addImageUrl = 'http://localhost:8080/image/addImage';
const deleteUrl = 'http://localhost:8080/image/deleteImage/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  addImage(idIntervention: string, idUser: string, image: Image): Observable<Image> {
    return this.http.post<Image>(addImageUrl + '?idIntervention=' + idIntervention + '&idUser=' + idUser, image, httpOptions).pipe(tap(_ => console.log('added images')),
      catchError(this.handleError<Image>('addImage'))
    );
  }

  getImageByIdUser(idIntervention: string, idUser: string): Observable<Image[]> {
    return this.http.get<Image[]>(getImageByUserUrl + '?idIntervention=' + idIntervention + '&idUser=' + idUser).pipe(tap(_ => console.log('fetched images')),
      catchError(this.handleError<Image[]>('getImages', []))
    );
  }

  deleteImage(idImage: string): Observable<{}> {
    return  this.http.delete(deleteUrl + idImage, httpOptions).pipe(tap(_ => console.log('eliminated type')),
      catchError(this.handleError<Image>('deleteType'))
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
