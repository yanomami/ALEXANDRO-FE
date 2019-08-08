import { Component, OnInit } from '@angular/core';
import {CaddyService} from '../../services/caddy.service';
import {ProductItem} from '../../models/product-item.model';

@Component({
  selector: 'app-caddies',
  templateUrl: './caddies.component.html',
  styleUrls: ['./caddies.component.scss']
})
export class CaddiesComponent implements OnInit {

  public list: ProductItem[];

  constructor(private caddyService: CaddyService) { }

  ngOnInit() {
    this.list = this.getCurrentCaddyItems();
  }

  getCurrentCaddyItems(): ProductItem[] {
    // Convert Map to Array
    return  [...this.caddyService.getCurrentCaddyItems()];
  }

  onRemoveProductFromCaddy(item: ProductItem) {
    this.caddyService.removeProductToCaddy(item.product);
    // Actualise list
    this.list = this.getCurrentCaddyItems();
  }
}
