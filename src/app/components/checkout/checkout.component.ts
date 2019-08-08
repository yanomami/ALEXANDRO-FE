import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client.model';
import {CaddyService} from '../../services/caddy.service';
import {ProductItem} from '../../models/product-item.model';
import {AddressService} from '../../services/address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor( private authService: AuthenticationService,
               private clientService: ClientService,
               private caddyService: CaddyService,
               private addressService: AddressService) { }

  public user: Client;
  public items: ProductItem[];

  ngOnInit() {

    this.items = this.caddyService.getCurrentCaddyItemsArray();

    this.getUser();
  }

  getUser() {
    const username: string = this.authService.getUsername();

    this.clientService.getSingleByUsername(username)
      .subscribe(data => {
          this.user = data;
          this.getInvoiceAddress(this.user);
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  getInvoiceAddress(user: Client) {
    const url = user._links.addressByInvoiceAddressId.href;

    this.addressService.getSingle(url)
      .subscribe(data => {
          user.addressByInvoiceAddressId = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
