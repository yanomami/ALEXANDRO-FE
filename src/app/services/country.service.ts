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

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public getSingle(url: string)
  public getSingle(id: number) {
    return this.http.get<Country>(this.url + '/' + id);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public delete(url: string)
  public delete(resource: Country) {
    return this.http.delete(this.url + '/' + resource.idCountry);
  }

  public create(resource: Country) {
    return this.http.post(this.url, resource);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public update(url: string, resource: Foo)
  public update(resource: Country) {
    return this.http.put(this.url + '/' + resource.idCountry, resource);
  }
}
