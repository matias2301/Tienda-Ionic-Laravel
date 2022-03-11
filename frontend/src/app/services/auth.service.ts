import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { UserRegister, RegisterResponse, LoginResponse, UserLogin, UserResponse } from '../interfaces/user';

// http://localhost:8000/api/auth/register

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:8000';
  ACCESS_TOKEN = 'auth-token';
  logged = new BehaviorSubject(false); 

  constructor(
    private httpClient: HttpClient,    
  ) { }

  login(user: UserLogin): Observable<LoginResponse> {

    return this.httpClient
    .post<LoginResponse>(`${this.AUTH_SERVER_ADDRESS}/api/auth/login`, user)
    .pipe(
      map( res => {                    
        if (res.access_token) {                  
          localStorage.setItem(this.ACCESS_TOKEN, res.access_token);
          this.logged.next(true);                        
        }  
        return res 
      }),
    );
  }

  getAuthUser(): Observable<UserResponse> {

  const httpOptions = this.buildAuthHeader();
    return this.httpClient
    .get<UserResponse>(`${this.AUTH_SERVER_ADDRESS}/api/auth/user`, httpOptions)
    .pipe(
      map( res => res ),
    );
  }

  logout(): Observable<UserResponse> {

    const httpOptions = this.buildAuthHeader();

    return this.httpClient
    .get<UserResponse>(`${this.AUTH_SERVER_ADDRESS}/api/auth/logout`, httpOptions)
    .pipe(
      map( res => res ),
    );
  }

  buildAuthHeader(){
    let token = localStorage.getItem(this.ACCESS_TOKEN);     
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };    
  }

}