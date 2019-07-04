import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../models/country.model';
import {ListResult} from '../models/list-result.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://localhost:8080/alexandro/';
  private endPoint = this. apiUrl + 'countries';

  constructor(private http: HttpClient) {
  }

  public getList(page: number, size: number) {
    return this.http.get<ListResult<Country>>(
      this.endPoint
      + '?page=' + page
      + '&size=' + size);
  }

  public getListByDescription(keyword: string, page: number, size: number) {
    return this.http.get<ListResult<Country>>(
      this.endPoint
      + '/search/byDescription'
      + '?key=' + keyword
      + '&page=' + page
      + '&size=' + size);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public getSingle(url: string)
  public getSingle(id: number) {
    return this.http.get<Country>(this.endPoint + '/' + id);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public delete(url: string)
  public delete(resource: Country) {
    return this.http.delete(this.endPoint + '/' + resource.idCountry);
  }

  public create(resource: Country) {
    return this.http.post(this.endPoint, resource);
  }

  // The best solution would be not to using the IDs of your entities, and use the link references the hypermedia provides.
  // You just need to parse your JSON accordingly to the HAL specification used by Spring Data Rest.
  // ->   public update(url: string, resource: Foo)
  public update(resource: Country) {
    return this.http.put(this.endPoint + '/' + resource.idCountry, resource);
  }
}
