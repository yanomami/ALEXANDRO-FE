import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/entities/client.model';
import {CaddyService} from '../../services/caddy.service';
import {ProductItem} from '../../models/product-item.model';
import {AddressService} from '../../services/address.service';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor( private authService: AuthenticationService,
               private clientService: ClientService,
               private caddyService: CaddyService,
               private addressService: AddressService,
               private orderService: OrderService,
               private router: Router) { }

  public user: Client;
  public items: ProductItem[];

  ngOnInit() {

    this.items = this.caddyService.getCurrentCaddyItemsArray();

    this.getUser();
  }

  getUser() {
    const username: string = this.authService.getUsername();

    if (!username) { this.router.navigateByUrl('/login'); } else {

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
  }

  getInvoiceAddress(user: Client) {
    const url = user._links.addressByInvoiceAddressId.href;

    this.addressService.getSingle(url)
      .subscribe(data => {
          user.addressByInvoiceAddressId = data;

          this.caddyService.setCurrentCaddyClient(user);
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onSubmitOrder() {
    this.orderService.submitOrder()
      .subscribe(data => {
        this.caddyService.setCurrentCaddyOrderHeader(data);
        this.router.navigateByUrl('/orderResume');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );  }
}
