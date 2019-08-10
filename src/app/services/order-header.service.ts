import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstractService';
import {OrderHeader} from '../models/entities/orderHeader.model';
import {Observable} from 'rxjs';
import {Client} from '../models/entities/client.model';
import {ListResult} from '../models/entities/list-result.model';
import {OrderLine} from '../models/entities/orderLine.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHeaderService extends AbstractService<OrderHeader> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/orderHeaders';
  }

  public getOrderLines(url: string): Observable<ListResult<OrderLine>> {
    return this.http.get<ListResult<OrderLine>>(url);
  }

}
