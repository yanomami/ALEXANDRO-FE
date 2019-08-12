import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CaddyService} from './caddy.service';
import {OrderHeader} from '../models/entities/orderHeader.model';
import {Item, Order} from '../models/order.model';
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

  submitOrder(): Observable<OrderHeader> {
    this.makeOrderFromCaddy();
    return this.http.post<OrderHeader>(this.host + '/orders', this.order);
  }

  getOrder(id: number): Observable<OrderHeader> {
    return this.http.get<OrderHeader>(this.host + '/orders' + id);
  }

  private makeOrderFromCaddy() {

    // Clear product items array (trick) frm previous order
    this.order.productItems.length = 0;

    const caddy: Caddy = this.caddyService.getCurrentCaddy();
    this.order.client = caddy.client;

    const productItems: ProductItem[] = this.caddyService.getCurrentCaddyItemsArray();

    productItems.forEach( p => {
      const item = new Item();
      item.id = p.product.id;
      item.quantity = p.quantity;
      this.order.productItems.push(item);
    });
  }
}
