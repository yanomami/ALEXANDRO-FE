import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {BookService} from '../../../services/book.service';
import {Book} from '../../../models/book.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  public currentItemProduct: Product;
  public currentItemBook: Book;


  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private serviceProduct: ProductService,
              private serviceBook: BookService) { }

  ngOnInit() {
    // Get product
    const url = atob(this.activatedRoute.snapshot.params.id);
    this.serviceProduct.getSingle(url)
      .subscribe(data => {
          this.currentItemProduct = data;
          this.getBook();
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  getBook() {
    const url = this.currentItemProduct._links.bookById.href;
    this.serviceBook.getSingle(url)
      .subscribe(data => {
          this.currentItemBook = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onUpdate(item: Product) {
    const url = item._links.self.href;
    this.serviceProduct.update(url, item)
      .subscribe(data => {
          this.router.navigateByUrl('/products');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }
}
