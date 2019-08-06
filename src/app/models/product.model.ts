export class Product {

  id: number;
  name: string;
  stock: number;
  priceExVat: number;
  picture: Int8Array;
  // tslint:disable-next-line:variable-name
  _links: {self: {href: string}, bookById: {href: string}};
}
