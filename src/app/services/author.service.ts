import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstractService';
import {Author} from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractService<Author> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/authors';
  }
}
