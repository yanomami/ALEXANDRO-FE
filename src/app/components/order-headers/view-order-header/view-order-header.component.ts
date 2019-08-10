import { Component, OnInit } from '@angular/core';
import {OrderHeaderService} from '../../../services/order-header.service';
import {OrderHeader} from '../../../models/entities/orderHeader.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-view-order-header',
  templateUrl: './view-order-header.component.html',
  styleUrls: ['./view-order-header.component.scss']
})
export class ViewOrderHeaderComponent implements OnInit {

  public currentItem: OrderHeader;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private orderHeaderService: OrderHeaderService,
              private clientService: ClientService) { }

  ngOnInit() {
    this.getOrderHeader();
  }

  getOrderHeader() {
    const url = atob(this.activatedRoute.snapshot.params.id);
    this.orderHeaderService.getSingle(url)
      .subscribe(data => {
          this.currentItem = data;
          this.getClient(this.currentItem);
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  getClient(orderHeader: OrderHeader) {
    const url = orderHeader._links.clientByClientId.href;
    this.clientService.getSingle(url)
      .subscribe(data => {
          orderHeader.clientByClientId = data;
          // this.getOrderlines(orderHeader.bookById);
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

/*  getAuthor(book: Book) {
    const url = book._links.authorByAuthorId.href;
    this.serviceAuthor.getSingle(url)
      .subscribe(data => {
          book.authorByAuthorId = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }*/

}
