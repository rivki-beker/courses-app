import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../entities/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  constructor(private http: HttpClient) { }

  checkLogin(name: string, password: string): Observable<User> {
    
    const apiUrl =`http://localhost:5242/api/User?name=${name}&password=${password}`;
    
    return this.http.get(apiUrl, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          console.log("response well service:" ,response);
          return response.body;
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An error occurred. Please try again.';
          if (error.status === 404) {
            errorMessage = 'User not found!';
          } else if (error.status === 401) {
            errorMessage = 'Incorrect password.';
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
 
  addUser(username: string, address: string, email: string, password: string) {
    const url = 'http://localhost:5242/api/User';
    const userData = {
      name: username,
      address: address,
      email: email,
      password: password
    };
    return this.http.post(url, userData);
  }
}