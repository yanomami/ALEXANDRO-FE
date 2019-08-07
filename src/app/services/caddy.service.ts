import { Injectable } from '@angular/core';
import {Caddy} from '../models/caddy.model';
import {ProductItem} from '../models/product-item.model';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  private currentCaddyName = 'Caddy1';
  private caddies: Map<string, Caddy> = new Map();

  constructor() {
/*    const caddies = localStorage.getItem('myCaddies');
    if (caddies) {
      this.caddies = JSON.parse(caddies);
    } else {
      const caddy = new Caddy(this.currentCaddyName);
      this.caddies.set(this.currentCaddyName, caddy);
    }*/
    const caddy = new Caddy(this.currentCaddyName);
    this.caddies.set(this.currentCaddyName, caddy);
  }

  public addProductToCaddy(product: Product, quantity: number) {
    const caddy = this.caddies.get(this.currentCaddyName);
    let productItem: ProductItem = caddy.items.get(product.id);
    if (productItem) {
      productItem.quantity += quantity;
    } else {
      productItem = new ProductItem();
      productItem.product = product;
      productItem.quantity = quantity;
      caddy.items.set(product.id, productItem);
    }
    this.saveCaddies();
  }

  getCurrentCaddy(): Caddy {
    return this.caddies.get(this.currentCaddyName);
  }

  getCurrentCaddyItems(): IterableIterator<ProductItem> {
    return this.getCurrentCaddy().items.values();
  }

  public saveCaddies() {
    localStorage.setItem('myCaddies', JSON.stringify(this.caddies));
  }

  getTotalCurrentCaddy(): number {
    let total = 0;
    const items: IterableIterator<ProductItem> = this.getCurrentCaddyItems();
    for (const item of items) {
      total += item.product.priceExVat * item.quantity;
    }
    return total;
  }
}
