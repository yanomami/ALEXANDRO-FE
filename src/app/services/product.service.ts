import { Injectable } from '@angular/core';
import {AbstractService} from './abstractService';
import {Product} from '../models/entities/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService<Product> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/products';
  }
}
