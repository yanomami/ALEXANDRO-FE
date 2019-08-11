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

  // The token contains the username and its roles(not the password)
  private jwtToken: string;

  private host  = 'http://localhost:8080/alexandro';

  login(user: Login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/login', user);
  }

  register(user: Register): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/register', user);
  }

  getUsername(): string {
    return this.jwtHelper.decodeToken(this.jwtToken).sub;
  }

  saveToken(jwtToken: string) {
    this.jwtToken = jwtToken;
    localStorage.setItem('token', jwtToken);
  }

  loadToken(): string {
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired(this.loadToken());
  }

  private getRoles(): Array<any> {
    return this.jwtHelper.decodeToken(this.jwtToken).scopes;
  }

  isAdmin(): boolean {
    for (const r of this.getRoles()) {
      if (r.authority === 'ADMIN') { return true; }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
