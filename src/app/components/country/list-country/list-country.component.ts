import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import {ListResult} from '../../../models/list-result.model';
import {Country} from '../../../models/country.model';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  private countries: ListResult<Country>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
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
}
