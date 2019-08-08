import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CaddyService} from './caddy.service';
import {OrderHeader} from '../models/orderHeader.model';
import {Order} from '../models/order.model';
import {Caddy} from '../models/caddy.model';
import {ProductItem} from '../models/product-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private host  = 'http://localhost:8080/alexandro';
  private order = new Order();

  constructor(private http: HttpClient,
              private caddyService: CaddyService ) { }

  submitOrder() {
    return this.http.post(this.host + '/orders', this.order);
  }

  getOrder(id: number): Observable<OrderHeader> {
    return this.http.get<OrderHeader>(this.host + '/orders' + id);
  }

  makeOrderFromCaddy() {
    const caddy: Caddy = this.caddyService.getCurrentCaddy();
    this.order.client = caddy.client;
    const productItems: ProductItem[] = this.caddyService.getCurrentCaddyItemsArray();
    for ( let i = 0; i < productItems.length; i++) {
      this.order.productItems[i].id = productItems[i].product.id;
      this.order.productItems[i].quantity = productItems[i].quantity;
    }
  }
}
