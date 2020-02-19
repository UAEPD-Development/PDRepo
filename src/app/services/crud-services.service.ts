import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {login_model} from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class curdService {
  baseurl = 'http://localhost/bussniess-logic';
  login_info: login_model[];

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }



  getAll(): Observable<login_model[]> {
    return this.http.get('${this.baseurl}/crud').pipe(
      map((res) => {
        this.login_info = res['data'];
        return this.login_info;
    }),
    catchError(this.handleError));
  }
}