import {Country} from './country.model';

export interface Address {

  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  countryByCountryId: Country;
}
