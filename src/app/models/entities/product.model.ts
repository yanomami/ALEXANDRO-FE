import {Book} from './book.model';

export interface Product {

  id: number;
  name: string;
  stock: number;
  priceExVat: number;
  picture: Int8Array;
  bookById: Book;
  // tslint:disable-next-line:variable-name
  _links: {self: {href: string}, bookById: {href: string}};
}
