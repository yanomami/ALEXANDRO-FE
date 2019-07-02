import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  private countries: any;
  private size = 5;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries()
      .subscribe(data => {
        this.countries = data;
        this.totalPages = data.page.totalPages;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
