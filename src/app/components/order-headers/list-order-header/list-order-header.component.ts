import { Component, OnInit } from '@angular/core';
import {ListResult} from '../../../models/entities/list-result.model';
import {OrderHeader} from '../../../models/entities/orderHeader.model';
import {Router} from '@angular/router';
import {OrderHeaderService} from '../../../services/order-header.service';

@Component({
  selector: 'app-list-order-header',
  templateUrl: './list-order-header.component.html',
  styleUrls: ['./list-order-header.component.scss']
})
export class ListOrderHeaderComponent implements OnInit {

  public list: ListResult<OrderHeader>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;

  constructor(private router: Router, private service: OrderHeaderService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.getList(this.currentPage, this.size)
      .subscribe(data => {
          this.totalPages = data.page.totalPages;
          this.pages = new Array<number>(this.totalPages);
          this.list = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onPage(i: number) {
    this.currentPage = i;
    this.getList();
  }

  onDelete(item: OrderHeader) {
    const url = item._links.self.href;
    this.service.delete(url)
      .subscribe(data => {
          this.getList();
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
