import {Author} from './author.model';
import {Publisher} from './publisher.model';
import {Collection} from './collection.model';
import {Product} from './product.model';

export class Book {

  id: number;
  isbn: string;
  title: string;
  nbPages: number;
  productByProductId: Product;
  authorByAuthorId: Author;
  publisherByPublisherId: Publisher;
  collectionByCollectionId: Collection;
}

