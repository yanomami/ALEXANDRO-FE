export class Book {

  id: number;
  isbn: string;
  title: string;
  nbPages: number;
  // tslint:disable-next-line:variable-name
  _links: {self: {href: string}
  , authorByAuthorId: {href: string}
  , publisherByPublisherId: {href: string}
  , collectionByCollectionId: {href: string}};
}
