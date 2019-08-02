import {HttpClient} from '@angular/common/http';
import {ListResult} from '../models/list-result.model';

export abstract class AbstractService<T> {

  protected url: string;

  protected constructor(protected http: HttpClient) {
  }

  public getList(page: number, size: number) {
    return this.http.get<ListResult<T>>(
      this.url
      + '?page=' + page
      + '&size=' + size);
  }

  public getSingle(url: string) {
    return this.http.get<T>(url);
  }

  public delete(url: string) {
    return this.http.delete(url);
  }

  public create(resource: T) {
    return this.http.post(this.url, resource);
  }

  public update(url: string, resource: T) {
    return this.http.put(url, resource);
  }
}