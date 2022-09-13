import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Rent} from "../model/rent";

@Injectable({
  providedIn: 'root'
})
export class RentCarService {
  basePath = "https://erentcar.herokuapp.com/api/v1/rents";

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

  getAll(): Observable<Rent> {
    return this.http.get<Rent>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(id: any): Observable<Rent> {
    return this.http.get<Rent>(`${ this.basePath}/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(clientId: any, carId: any, item: any): Observable<Rent> {
    return this.http.post<Rent>(`${ this.basePath }/client/${ clientId }/car/${ carId }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Rent> {
    return this.http.put<Rent>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
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
