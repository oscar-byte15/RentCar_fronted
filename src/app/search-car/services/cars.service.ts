import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Car} from "../model/car";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  basePath = "https://erentcar.herokuapp.com/api/v1/cars";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError("Something happened with request, please try again later");
  }

  getAll(): Observable<Car> {
    return this.http.get<Car>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(id: any): Observable<Car> {
    return this.http.get<Car>(`${ this.basePath }/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getCarsByClientId(clientId: any): Observable<Car> {
    return this.http.get<Car>(`${ this.basePath }/client/${ clientId }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(clientId: any, carModelId: any, item: any): Observable<Car> {
    return this.http.post<Car>(`${ this.basePath }/client/${ clientId }/car-model/${ carModelId }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Car> {
    return this.http.put<Car>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateCarRate(cardId: any, rate: any): Observable<Car> {
    return this.http.put<Car>(`${ this.basePath }/${ cardId }/rate/${ rate }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id: any) {
    return this.http.delete(`${ this.basePath }/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
