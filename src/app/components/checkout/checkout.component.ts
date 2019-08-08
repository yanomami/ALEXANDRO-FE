import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor( private authService: AuthenticationService,
               private clientService: ClientService) { }

   public user: Client;

  ngOnInit() {
    const username: string = this.authService.getUsername();

    this.clientService.getSingleByUsername(username)
      .subscribe(data => {
          this.user = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
