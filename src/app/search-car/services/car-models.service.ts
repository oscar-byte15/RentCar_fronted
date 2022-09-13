import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {CarModel} from "../model/car-model";

@Injectable({
  providedIn: 'root'
})
export class CarModelsService {
  basePath = "https://erentcar.herokuapp.com/api/v1/car-models";

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

  getAll(): Observable<CarModel> {
    return this.http.get<CarModel>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(id: any): Observable<CarModel> {
    return this.http.get<CarModel>(`${ this.basePath}/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(carBrandId: any, item: any): Observable<CarModel> {
    return this.http.post<CarModel>(`${ this.basePath}/car-brands/${ carBrandId }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<CarModel> {
    return this.http.put<CarModel>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
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
