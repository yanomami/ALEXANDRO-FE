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

  private item: Country = new Country();

  constructor(private router: Router, private service: CountryService) { }

  ngOnInit() {
  }

  onCreate() {
    this.service.create(this.item)
      .subscribe(data => {
          this.router.navigateByUrl('/countries');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
