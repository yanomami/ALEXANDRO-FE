import { Injectable } from '@angular/core';
import {Caddy} from '../models/caddy.model';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  currentCaddy = 'Caddy1';
  private caddies: Map<number, Caddy> = new Map();

  constructor() { }

  // public addProductToCaddy(product: Product, quantity)

}
