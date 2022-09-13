import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Plan} from "../model/plan";
import {Rent} from "../../search-car/model/rent";

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  basePath = "https://erentcar.herokuapp.com/api/v1/plans"

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

  getAll(): Observable<Plan> {
    return this.http.get<Plan>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(id: any): Observable<Plan> {
    return this.http.get<Plan>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  create(item: any): Observable<Plan> {
    return this.http.post<Plan>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Plan> {
    return this.http.put<Plan>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
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
