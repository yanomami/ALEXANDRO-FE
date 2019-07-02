import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  getCountries() {
    this.countryService.getCountries()
      .subscribe(data => {
        this.countries = data;
        this.totalPages=
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
