import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  public currentItem: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private service: ProductService) { }

  ngOnInit() {
    const url = atob(this.activatedRoute.snapshot.params.id);
    this.service.getSingle(url)
      .subscribe(data => {
          this.currentItem = data;
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }

  onUpdate(item: Product) {
    const url = item._links.self.href;
    this.service.update(url, item)
      .subscribe(data => {
          this.router.navigateByUrl('/products');
        },
        error => {
          console.log('Error ! : ' + error);
        }
      );
  }
}
