import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country.model';
import {ListResult} from '../models/list-result.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // private host = 'http://localhost:8080';
  private url = 'http://localhost:8080/alexandro/countries';

  constructor(private http: HttpClient) {
  }

  public getCountries(page: number, size: number) {
    return this.http.get<ListResult<Country>>(
      this.url
      + '?page=' + page
      + '&size=' + size);
  }

  public deleteCountry(country: Country) {
    return this.http.delete(this.url + '/' + country.idCountry);
  }

  public updateCountry(country: Country) {
    return this.http.put(this.url, country);
  }

  public createCountry(country: Country) {
    return this.http.post<Country>(this.url, country);
  }
}
