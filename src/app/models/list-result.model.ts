export interface ListResult<T> {
  _embedded: EmbeddedList<T>;
  _links: any;
  page: any;
}

export interface EmbeddedList<T> {
  results: T[];
}

// TODO : model HAL links
/*
interface HalLink {
  href: string;
  type: string;
}

interface HalLinks {
  [s: string]: HalLink | HalLink[];
}

...
  _links: {self: {href: string}};

}*/
