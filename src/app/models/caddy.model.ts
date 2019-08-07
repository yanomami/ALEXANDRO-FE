import {Product} from './product.model';
import {Client} from './client.model';

export class Caddy {
  public name: string;
  public items: Map<string, Product> = new Map();
  public client: Client;

  constructor(name: string) {
    this.name = name;
  }
}
