import {OrderHeader} from './orderHeader.model';
import {Product} from './product.model';

export interface OrderLine {
  orderHeaderId: number;
  productId: number;
  quantity: number;
  orderHeaderByOrderHeaderId: OrderHeader;
  productByProductId: Product;
}
