import {Client} from './client.model';
import {ShippingMethod} from './shippingMethod.model';

export class Order {
  client: Client;
  shippingMethod: ShippingMethod;
  productItems: Item[] = new Array<Item>();
}

export class Item {
  id: number;
  quantity: number;
}
