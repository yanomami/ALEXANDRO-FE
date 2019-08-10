import {Client} from './entities/client.model';
import {ProductItem} from './product-item.model';
import {OrderHeader} from './entities/orderHeader.model';

export class Caddy {
  public name: string;
  public items: Map<number, ProductItem> = new Map();
  public client: Client;
  public orderHeader: OrderHeader;

  constructor(name: string) {
    this.name = name;
  }
}
