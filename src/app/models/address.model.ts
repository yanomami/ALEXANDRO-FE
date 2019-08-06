import {Country} from './country.model';

export class Address {

  // tslint:disable-next-line:max-line-length
  constructor(id: number, addressLine1: string, addressLine2: string, city: string, state: string, postalCode: string, countryByCountryId: Country) {
    this.id = id;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.countryByCountryId = countryByCountryId;
  }

  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  countryByCountryId: Country;
}
