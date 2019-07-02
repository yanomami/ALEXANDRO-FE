import {Country} from './country.model';

export class Address {

  idAddress: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  countryByCountryId: Country;
}
