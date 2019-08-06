import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api.response';
import {Register} from '../models/register.model';
import {Login} from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private jwtToken: string;

  constructor(private http: HttpClient) { }

  private host  = 'http://localhost:8080/alexandro';

  login(user: Login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/login', user);
  }

  register(user: Register): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/register', user);
  }

  saveToken(jwtToken) {
    this.jwtToken = jwtToken;
    localStorage.setItem('token', jwtToken);
  }
}
