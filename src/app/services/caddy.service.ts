import { Injectable } from '@angular/core';
import {Caddy} from '../models/caddy.model';
import {ProductItem} from '../models/product-item.model';
import {Product} from '../models/product.model';
import {Client} from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  private currentCaddyName = 'Caddy1';
  private caddies: Map<string, Caddy> = new Map();

  constructor() {

    if (!this.loadCaddies()) {
      const caddy = new Caddy(this.currentCaddyName);
      this.caddies.set(this.currentCaddyName, caddy);
    }
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

  public removeProductToCaddy(product: Product) {
    const caddy = this.caddies.get(this.currentCaddyName);
    caddy.items.delete(product.id);
    this.saveCaddies();
  }

  getCurrentCaddy(): Caddy {
    return this.caddies.get(this.currentCaddyName);
  }

  private getCurrentCaddyItems(): IterableIterator<ProductItem> {
    return this.getCurrentCaddy().items.values();
  }

  getCurrentCaddyItemsArray(): ProductItem[] {
    // Convert Map to Array
    return  [...this.getCurrentCaddyItems()];
  }

  private loadCaddies(): boolean {

    let isLoaded = false;

    const caddies = localStorage.getItem('myCaddies');

    // Convert Array to Map after serialization
    function reviver(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
          return new Map(value.value);
        }
      }
      return value;
    }

    if (caddies) {
      this.caddies = JSON.parse(caddies, reviver);
      isLoaded = true;
    }

    return isLoaded;
  }

  private saveCaddies() {

    // Convert Map to Array before serialization
    function replacer(key, value) {
      const originalObject = this[key];
      if (originalObject instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
        };
      } else {
        return value;
      }
    }

    localStorage.setItem('myCaddies', JSON.stringify(this.caddies, replacer));
  }

  getCurrentCaddyName(): string {
    return this.getCurrentCaddy().name;
  }

  getCurrentCaddyNbItems(): number {
    return this.getCurrentCaddy().items.size;
  }

  getCurrentCaddyPriceTotal(): number {
    let total = 0;
    const items: IterableIterator<ProductItem> = this.getCurrentCaddyItems();
    for (const item of items) {
      total += item.product.priceExVat * item.quantity;
    }
    return total;
  }

  setCurrentCaddyClient(client: Client) {
    this.getCurrentCaddy().client = client;
    this.saveCaddies();
  }

}
