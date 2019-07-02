import { Component, OnInit } from '@angular/core';
import {ListResult} from '../../../models/list-result.model';
import {Country} from '../../../models/country.model';
import {CountryService} from '../../../services/country.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent implements OnInit {

  private list: ListResult<Country>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;
  private currentKeyword = '';

  constructor(private service: CountryService) { }

  ngOnInit() {
  }

  getListByKeyword() {
    this.service.getListByKeyword(this.currentKeyword, this.currentPage, this.size)
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
    this.getListByKeyword();
  }

  onSearch(form: NgForm) {
    this.currentKeyword = form.value.keyword;
    this.getListByKeyword();
  }

  onDelete(item: Country) {
    this.service.delete(item)
      .subscribe(data => {
          this.getListByKeyword();
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }
}
