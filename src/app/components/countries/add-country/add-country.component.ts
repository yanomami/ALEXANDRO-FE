import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import {Country} from '../../../models/country.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  public newItem: Country = new Country(null, null);

  constructor(private router: Router, private service: CountryService) { }

  ngOnInit() {
  }

  onCreate() {
    this.service.create(this.newItem)
      .subscribe(data => {
          this.router.navigateByUrl('/countries');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
