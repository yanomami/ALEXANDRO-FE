import {Client} from './client.model';
import {ShippingMethod} from './shippingMethod.model';

export class Order {
  idClient: number;
  productItems: Item[] = new Array<Item>();
}

export class Item {
  id: number;
  quantity: number;
}
