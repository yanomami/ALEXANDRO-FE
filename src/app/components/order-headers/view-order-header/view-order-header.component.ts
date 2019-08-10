import { Component, OnInit } from '@angular/core';
import {OrderHeaderService} from '../../../services/order-header.service';
import {OrderHeader} from '../../../models/entities/orderHeader.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../services/client.service';
import {ListResult} from '../../../models/entities/list-result.model';
import {Product} from '../../../models/entities/product.model';
import {OrderLine} from '../../../models/entities/orderLine.model';

@Component({
  selector: 'app-view-order-header',
  templateUrl: './view-order-header.component.html',
  styleUrls: ['./view-order-header.component.scss']
})
export class ViewOrderHeaderComponent implements OnInit {

  public currentItem: OrderHeader;
  public orderLines: ListResult<OrderLine>;

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
          this.getOrderlines(this.currentItem);
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
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  getOrderlines(orderHeader: OrderHeader) {
    const url = orderHeader._links.orderLinesById.href;
    this.orderHeaderService.getOrderLines(url)
      .subscribe(data => {
          this.orderLines = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
