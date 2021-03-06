import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {Login} from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;

  public user: Login = new Login();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.authService.isTokenExpired()) {
      this.router.navigateByUrl('/products');
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.user.username = this.loginForm.controls.username.value;
    this.user.password = this.loginForm.controls.password.value;

    this.authService.login(this.user).subscribe(data => {
      this.doAction(data);
    },
      error => {
        this.invalidLogin = true;
        console.log('Error ! : ' + error);
      }
    );
  }

  doAction(data) {
    if (data.status === 200) {
      const jwtToken = data.result.token;
      this.authService.saveToken(jwtToken);

      // Redirect
      const origin = this.activatedRoute.snapshot.params.origin;
      if (origin) {
        this.router.navigateByUrl('/' + origin).then();
      } else {
        this.router.navigateByUrl('/products').then();
      }

    } else {
      this.invalidLogin = true;
      alert(data.message);
    }
  }

  onRegister() {
    // Redirect
    const origin = this.activatedRoute.snapshot.params.origin;
    if (origin) {
      this.router.navigateByUrl('/register/' + origin).then();
    } else {
      this.router.navigateByUrl('/register').then();
    }
  }
}
