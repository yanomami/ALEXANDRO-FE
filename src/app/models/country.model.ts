export class Country {

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }

  id: number;
  description: string;
  // tslint:disable-next-line:variable-name
  _links: {self: {href: string}};
}

