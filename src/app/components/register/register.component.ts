import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Country} from '../../models/country.model';
import {Client} from '../../models/client.model';
import {PaymentMethod} from '../../models/paymentMethod.model';
import {Address} from '../../models/address.model';
import {Title} from '../../models/title.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  public newItem: Client = new Client();

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }

  onSubmit() {
    this.apiService.register(this.newItem)
      .subscribe( data => {
        this.router.navigateByUrl('/products');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
