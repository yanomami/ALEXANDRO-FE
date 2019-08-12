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

  // The token contains the username and its roles(not the password)
  private jwtToken: string;
  private roles: Array<any>;

  private host  = 'http://localhost:8080/alexandro';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.loadToken();
  }

  login(user: Login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/login', user);
  }

  register(user: Register): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/register', user);
  }

  getUsername(): string {
    return this.jwtToken ? this.jwtHelper.decodeToken(this.jwtToken).sub : null;
  }

  saveToken(jwtToken: string) {
    this.jwtToken = jwtToken;
    this.roles = this.getRoles(jwtToken);
    localStorage.setItem('token', jwtToken);
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    this.roles = this.getRoles(this.jwtToken);
  }

  private getRoles(jwtToken: string): Array<any> {
    return jwtToken ? this.jwtHelper.decodeToken(jwtToken).scopes : null;
  }

  isTokenExpired(): boolean {
    return this.jwtToken ? this.jwtHelper.isTokenExpired(this.jwtToken) : true;
  }

  isAdmin(): boolean {

    if (this.roles) {
      for (const r of this.roles) {
        if (r.authority === 'ADMIN') {
          return true;
        }
      }
    }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.jwtToken = null;
    this.roles = null;
  }

}
