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

  // FIXME : Add dummies data as some fields doesn't accept null in database
  static addDummies(client: Client) {

    const dummyTitle: Title = new Title(1, 'Sir');
    const dummyPaymentMethod: PaymentMethod = new PaymentMethod(1, 'Mastercard');
    const dummyCountry: Country = new Country(1, 'Slovakia');
    const dummyInvoiceAddress: Address = new Address(null, 'Line1', 'Line2', 'City', 'State', 'PostalCode', dummyCountry);
    const dummyDeliveryAddress: Address = new Address(null, 'Line1', 'Line2', 'City', 'State', 'PostalCode', dummyCountry);

    client.id = null;
    client.titleByTitleId = dummyTitle;
    client.phone = '+33770386263';
    client.addressByInvoiceAddressId = dummyInvoiceAddress;
    client.addressByDeliveryAddressId = dummyDeliveryAddress;
    client.paymentMethodByPaymentMethodId = dummyPaymentMethod;
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }

  onSubmit() {
    RegisterComponent.addDummies(this.newItem);
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
