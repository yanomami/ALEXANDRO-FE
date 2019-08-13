import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {CaddyService} from '../../services/caddy.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthenticationService,
              private router: Router,
              public caddyService: CaddyService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/products');
  }
}
