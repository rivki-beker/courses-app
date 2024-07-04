import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Lecturer } from '../entities/lecturer.model';

@Injectable({
  providedIn: 'root',
})
export class LecturerLoginService {
  constructor(private http: HttpClient) { }

  checkLogin(name: string, password: string): Observable<Lecturer> {
    
    const apiUrl =`${process.env['API_URL']}/Lecturer?name=${name}&password=${password}`;
    
    return this.http.get(apiUrl, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          return response.body;
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An error occurred. Please try again.';
          if (error.status === 404) {
            errorMessage = 'Lecturer not found!';
          } else if (error.status === 401) {
            errorMessage = 'Incorrect password.';
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}