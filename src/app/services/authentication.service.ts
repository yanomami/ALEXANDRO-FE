import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api.response';
import {Register} from '../models/register.model';
import {Login} from '../models/login.model';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  private jwtToken: string;

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

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  isTokenExpired() {
    return this.jwtHelper.isTokenExpired(this.jwtToken);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
