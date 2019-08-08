import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstractService';
import {Client} from '../models/client.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends AbstractService<Client> {

  constructor(http: HttpClient)  {
    super(http);
    this.url = 'http://localhost:8080/alexandro/clients';
  }

  public getSingleByUsername(username: string): Observable<Client> {
    return this.http.get<Client>(
      this.url
      + '/search/findByUsername'
      + '?username=' + username);
  }
}
