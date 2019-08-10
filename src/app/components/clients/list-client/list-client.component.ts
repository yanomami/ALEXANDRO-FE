import { Component, OnInit } from '@angular/core';
import {ListResult} from '../../../models/entities/list-result.model';
import {Client} from '../../../models/entities/client.model';
import {Router} from '@angular/router';
import {ClientService} from '../../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  public list: ListResult<Client>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  private pages: Array<number>;

  constructor(private router: Router, private service: ClientService) { }

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

  onDelete(item: Client) {
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

  onEdit(item: Client) {
    const url = item._links.self.href;
    this.router.navigateByUrl('/clients/edit/' + btoa(url));
  }

  onView(item: Client) {
    const url = item._links.self.href;
    this.router.navigateByUrl('/clients/view/' + btoa(url));
  }

}
