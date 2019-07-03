import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country.model';
import {ListResult} from '../models/list-result.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = 'http://localhost:8080/alexandro/countries';

  constructor(private http: HttpClient) {
  }

  public getList(page: number, size: number) {
    return this.http.get<ListResult<Country>>(
      this.url
      + '?page=' + page
      + '&size=' + size);
  }

  public getListByDescription(keyword: string, page: number, size: number) {
    return this.http.get<ListResult<Country>>(
      this.url
      + '/search/byDescription'
      + '?key=' + keyword
      + '&page=' + page
      + '&size=' + size);
  }

  public getById(id: number) {
    return this.http.get<Country>(this.url + '/' + id);
  }

  public delete(resource: Country) {
    return this.http.delete(this.url + '/' + resource.idCountry);
  }

  public create(resource: Country) {
    return this.http.post(this.url, resource);
  }

  public update(resource: Country) {
    return this.http.put(this.url + '/' + resource.idCountry, resource);
  }
}
