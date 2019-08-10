import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/entities/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {BookService} from '../../../services/book.service';
import {Book} from '../../../models/entities/book.model';
import {Author} from '../../../models/entities/author.model';
import {AuthorService} from '../../../services/author.service';
import {CaddyService} from '../../../services/caddy.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  public currentItemProduct: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private serviceProduct: ProductService,
              private serviceBook: BookService,
              private serviceAuthor: AuthorService,
              private serviceCaddy: CaddyService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const url = atob(this.activatedRoute.snapshot.params.id);
    this.serviceProduct.getSingle(url)
      .subscribe(data => {
          this.currentItemProduct = data;
          this.getBook(this.currentItemProduct);
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
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

  onAddProductToCaddy(product: Product, quantity: number) {
    this.serviceCaddy.addProductToCaddy(product, quantity );
  }
}
