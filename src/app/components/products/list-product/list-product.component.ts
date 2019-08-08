import { Component, OnInit } from '@angular/core';
import {ListResult} from '../../../models/list-result.model';
import {Product} from '../../../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {CaddyService} from '../../../services/caddy.service';
import {BookService} from '../../../services/book.service';
import {AuthorService} from '../../../services/author.service';
import {Book} from '../../../models/book.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  public list: ListResult<Product>;
  private size = 10;
  private currentPage = 0;
  private totalPages: number;
  public pages: Array<number>;

  constructor(private router: Router,
              private service: ProductService,
              private serviceCaddy: CaddyService,
              private serviceBook: BookService,
              private serviceAuthor: AuthorService) { }

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

  onDelete(item: Product) {
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

  onEdit(item: Product) {
    const url = item._links.self.href;
    this.router.navigateByUrl('/products/edit/' + btoa(url));
  }

  onView(item: Product) {
    const url = item._links.self.href;
    this.router.navigateByUrl('/products/view/' + btoa(url));
  }

  onAddProductToCaddy(product: Product, quantity: number) {
    // Retrieve product child's
    this.getBook(product);

    this.serviceCaddy.addProductToCaddy(product, quantity);
  }

  getBook(product: Product) {
    const url = product._links.bookById.href;
    this.serviceBook.getSingle(url)
      .subscribe(data => {
          product.bookById = data;
          this.getAuthor(product.bookById);
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  getAuthor(book: Book) {
    const url = book._links.authorByAuthorId.href;
    this.serviceAuthor.getSingle(url)
      .subscribe(data => {
          book.authorByAuthorId = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

}

