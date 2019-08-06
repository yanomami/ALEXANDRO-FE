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
  private roles: Array<any> = [];

  private host  = 'http://localhost:8080/alexandro';

  static logout() {
    localStorage.removeItem('token');
  }

  login(user: Login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/login', user);
  }

  register(user: Register): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.host + '/register', user);
  }

  saveToken(jwtToken) {
    this.jwtToken = jwtToken;
    localStorage.setItem('token', jwtToken);
    this.roles = this.jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  isAdmin() {
    for (const r of this.roles) {
      if (r.authority === 'ADMIN') { return true; }
    }
    return false;
  }
}
