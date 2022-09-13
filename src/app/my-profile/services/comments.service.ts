import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Comment} from "../model/comment";
import {catchError, retry} from "rxjs/operators";
import {Car} from "../../search-car/model/car";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  basePath = "http://localhost:3000/api/v1/comments";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  constructor(private http: HttpClient) { }

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

  getAll(): Observable<Comment> {
    return this.http.get<Comment>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(id: any): Observable<Comment> {
    return this.http.get<Comment>(`${ this.basePath }/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(clientId: any, clientCommentId: any, item: any): Observable<Comment> {
    return this.http.post<Comment>(`
          ${ this.basePath }/client/${ clientId }/client-comment/${ clientCommentId }`,
          JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Comment> {
    return this.http.put<Comment>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
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
