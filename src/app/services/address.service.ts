import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstractService';
import {Address} from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends AbstractService<Address> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/addresses';
  }
}
