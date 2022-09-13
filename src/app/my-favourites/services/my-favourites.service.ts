
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MyFavourites} from "../model/my-favourites";

@Injectable({
  providedIn: 'root'
})
export class MyFavouritesService {
  basePath = "https://erentcar.herokuapp.com/api/v1/favourites"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      // Default error
      console.log(`An error occurred: ${error.error.message}`)
    }
    else {
      // Unsuccessful Response Error Code returned
      console.error(
        `Backend returned code ${error.status},
         body was ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  // Get All Favourite
  getAll(): Observable<MyFavourites> {
    return this.http.get<MyFavourites>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Favourite by Id
  getById(id: any): Observable<MyFavourites> {
    return this.http.get<MyFavourites>(`${ this.basePath }/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Favourite by CarId
  getByClientId(clientId: any): Observable<MyFavourites> {
    return this.http.get<MyFavourites>(`${ this.basePath }/client/${ clientId }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Create Favourite
  create(clientId: any, carId: any, item: any): Observable<MyFavourites> {
    return this.http.post<MyFavourites>(
      `${ this.basePath }/client/${ clientId }/car/${ carId }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Favourite
  delete(id: any): Observable<MyFavourites> {
    return this.http.delete<MyFavourites>(`${ this.basePath }/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
