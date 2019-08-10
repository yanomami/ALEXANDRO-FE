import { Component, OnInit } from '@angular/core';
import {CaddyService} from '../../services/caddy.service';
import {Router} from '@angular/router';
import {OrderHeader} from '../../models/entities/orderHeader.model';

@Component({
  selector: 'app-order-resume',
  templateUrl: './order-resume.component.html',
  styleUrls: ['./order-resume.component.scss']
})
export class OrderResumeComponent implements OnInit {

  constructor(private router: Router,
              public caddyService: CaddyService) { }

  ngOnInit() {
  }

  onView(item: OrderHeader) {
    const url = 'http://localhost:8080/alexandro/orderHeaders/' + item.id; // TODO : not clean
    this.router.navigateByUrl('/orderHeaders/view/' + btoa(url));
  }
}
