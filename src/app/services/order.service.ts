import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CaddyService} from './caddy.service';
import {OrderHeader} from '../models/orderHeader.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private host  = 'http://localhost:8080/alexandro';

  constructor(private http: HttpClient,
              private caddyService: CaddyService ) { }

  submitOrder() {
    // return this.http.post(this.host + '/orders', this.order);
  }

  getOrder(id: number): Observable<OrderHeader> {
    return this.http.get<OrderHeader>(this.host + 'orders' + id);
  }

  makeOrderFromCaddy() {}
}
