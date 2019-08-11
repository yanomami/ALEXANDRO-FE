import {Client} from './client.model';
import {ShippingMethod} from './shippingMethod.model';

export interface OrderHeader {
  id: number;
  datePlaced: Date;
  dateShipped: Date;
  dateDelivered: Date;
  comment: string;
  clientByClientId: Client;
  shippingMethodByShippingMethodId: ShippingMethod;

  // tslint:disable-next-line:variable-name
  _links: {
    self: {href: string},
    orderLinesById: {href: string},
    clientByClientId: {href: string}
  };
}
