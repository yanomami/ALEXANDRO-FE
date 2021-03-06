import { Component, OnInit } from '@angular/core';
import {CaddyService} from '../../services/caddy.service';
import {ProductItem} from '../../models/product-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-caddies',
  templateUrl: './caddies.component.html',
  styleUrls: ['./caddies.component.scss']
})
export class CaddiesComponent implements OnInit {

  public list: ProductItem[];

  constructor(private router: Router,
              public caddyService: CaddyService) { }

  ngOnInit() {
    this.list = this.caddyService.getCurrentCaddyItemsArray();
  }

  onRemoveProductFromCaddy(item: ProductItem) {
    this.caddyService.removeProductToCaddy(item.product);
    // Actualise list
    this.list = this.caddyService.getCurrentCaddyItemsArray();
  }

  onCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
