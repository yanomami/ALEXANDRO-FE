import {Address} from './Address.model';
import {Title} from './Title.model';
import {PaymentMethodModel} from './PaymentMethod.model';

export class Client {

  idClient: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  titleByTitleId: Title;
  addressByInvoiceAddressId: Address;
  addressByDeliveryAddressId: Address;
  paymentMethodByPaymentMethodId: PaymentMethodModel;
}
