import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstractService';
import {Book} from '../models/entities/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AbstractService<Book> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/books';
  }
}
