import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstractService';
import {OrderHeader} from '../models/entities/orderHeader.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHeaderService extends AbstractService<OrderHeader> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/orderHeaders';
  }
}
