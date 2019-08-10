import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../../../services/country.service';
import {Country} from '../../../models/entities/country.model';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {

  public currentItem: Country;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private service: CountryService) { }

  ngOnInit() {
/*    const id: number = this.activatedRoute.snapshot.params.id;
    this.service.getSingleById(id)
      .subscribe(data => {
          this.currentItem = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );*/

    const url = atob(this.activatedRoute.snapshot.params.id);
    this.service.getSingle(url)
      .subscribe(data => {
          this.currentItem = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onUpdate(item: Country) {
    const url = item._links.self.href;
    this.service.update(url, item)
      .subscribe(data => {
          this.router.navigateByUrl('/countries');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );

/*    this.service.updateById(item)
      .subscribe(data => {
          this.router.navigateByUrl('/countries');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );*/
  }
}
