import { Component, OnInit } from '@angular/core';
import {CaddyService} from '../../services/caddy.service';

@Component({
  selector: 'app-order-resume',
  templateUrl: './order-resume.component.html',
  styleUrls: ['./order-resume.component.scss']
})
export class OrderResumeComponent implements OnInit {

  constructor(public caddyService: CaddyService) { }

  ngOnInit() {
  }

}
