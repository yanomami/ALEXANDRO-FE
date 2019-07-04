export interface ListResult<T> {
  _embedded: EmbeddedList<T>;
  _links: any;
  page: any;
}

export interface EmbeddedList<T> {
  results: T[];
  _links: {self: {href: string}};
}
