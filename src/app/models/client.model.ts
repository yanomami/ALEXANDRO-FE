import {Address} from './address.model';
import {Title} from './title.model';
import {PaymentMethod} from './paymentMethod.model';

export class Client {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  titleByTitleId: Title;
  addressByInvoiceAddressId: Address;
  addressByDeliveryAddressId: Address;
  paymentMethodByPaymentMethodId: PaymentMethod;

  // tslint:disable-next-line:variable-name
  _links: {self: {href: string}};
}
