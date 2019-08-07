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
  }
  getCurrentCaddy(): Caddy {
    return this.caddies.get(this.currentCaddyName);
  }

  public saveCaddies() {
    localStorage.setItem('myCaddies', JSON.stringify(this.caddies));
  }

  getTotalCurrentCaddy(): number {
    let total = 0;
    const items: IterableIterator<ProductItem> = this.getCurrentCaddy().items.values();
    for (const item of items) {
      total += item.product.priceExVat * item.quantity;
    }
    return total;
  }
}
