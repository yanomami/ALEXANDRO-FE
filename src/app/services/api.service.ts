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
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/alexandro/users/';

  login(user: Login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/alexandro/' + 'token/generate-token', user);
  }

  register(user: Register): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/alexandro/register', user);
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
