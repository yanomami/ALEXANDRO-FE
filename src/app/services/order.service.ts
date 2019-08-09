import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CaddyService} from './caddy.service';
import {OrderHeader} from '../models/orderHeader.model';
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

  submitOrder(): Observable<Order> {
    this.makeOrderFromCaddy();
    return this.http.post<Order>(this.host + '/orders', this.order);
  }

  getOrder(id: number): Observable<OrderHeader> {
    return this.http.get<OrderHeader>(this.host + '/orders' + id);
  }

  private makeOrderFromCaddy() {
    const caddy: Caddy = this.caddyService.getCurrentCaddy();
    this.order.client = caddy.client;

    const productItems: ProductItem[] = this.caddyService.getCurrentCaddyItemsArray();

    productItems.forEach( p => {
      const item = new Item();
      item.id = p.product.id;
      item.quantity = p.quantity;
      this.order.productItems.push(item);
    });

/*    for ( let i = 0; i < productItems.length; i++) {
      this.order.productItems[i] = new Item();
      this.order.productItems[i].id = productItems[i].product.id;
      this.order.productItems[i].quantity = productItems[i].quantity;
    }*/
  }
}
