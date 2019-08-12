import {Client} from './entities/client.model';

export class Order {
  client: Client;
  productItems: Item[] = new Array<Item>();
}

export class Item {
  id: number;
  quantity: number;
}
