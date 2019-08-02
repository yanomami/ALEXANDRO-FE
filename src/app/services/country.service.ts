import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country.model';
import {ListResult} from '../models/list-result.model';
import {AbstractService} from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends AbstractService<Country> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/alexandro/countries';
  }

  public getListByDescription(keyword: string, page: number, size: number) {
    return this.http.get<ListResult<Country>>(
      this.url
      + '/search/findByDescriptionContains'
      + '?key=' + keyword
      + '&page=' + page
      + '&size=' + size);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public getSingleById(url: string)
  public getSingleById(id: number) {
    return this.http.get<Country>(this.url + '/' + id);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public delete(url: string)
  public deleteById(resource: Country) {
    return this.http.delete(this.url + '/' + resource.id);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public updateById(url: string, resource: Foo)
  public updateById(resource: Country) {
    return this.http.put(this.url + '/' + resource.id, resource);
  }
}
