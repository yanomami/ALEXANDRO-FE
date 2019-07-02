import { Component, OnInit } from '@angular/core';
import {ListResult} from '../../../models/list-result.model';
import {Country} from '../../../models/country.model';
import {CountryService} from '../../../services/country.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent implements OnInit {

  private countries: ListResult<Country>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  getCountries() {
    this.countryService.getCountries(this.currentPage, this.size)
      .subscribe(data => {
          this.totalPages = data.page.totalPages;
          this.pages = new Array<number>(this.totalPages);
          this.countries = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onPageCounty(i: number) {
    this.currentPage = i;
    this.getCountries();
  }

  onSearch(value: any) {
    
  }
}
