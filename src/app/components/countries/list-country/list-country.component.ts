import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import {ListResult} from '../../../models/list-result.model';
import {Country} from '../../../models/country.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  public list: ListResult<Country>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;

  constructor(private router: Router, private service: CountryService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.getList(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data.page.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.list = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onPage(i: number) {
    this.currentPage = i;
    this.getList();
  }

  onDelete(item: Country) {
    const url = item._links.self.href;
    this.service.deleteByUrl(url)
      .subscribe(data => {
          this.getList();
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );

/*    this.service.deleteById(item)
      .subscribe(data => {
        this.getList();
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );*/
  }

  onEdit(item: Country) {
    const url = item._links.self.href;
    this.router.navigateByUrl('/countries/edit/' + btoa(url));
    // this.router.navigateByUrl('/countries/edit/' + item.id);
  }
}
