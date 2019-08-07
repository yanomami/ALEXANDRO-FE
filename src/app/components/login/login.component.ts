import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
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
              private authService: AuthenticationService) { }

  ngOnInit() {
    const token = this.authService.loadToken();
    if (token) { this.router.navigateByUrl('/products'); }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.user.username = this.loginForm.controls.username.value;
    this.user.password =  this.loginForm.controls.password.value;

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
      this.router.navigateByUrl('/products').then(r => alert('Sign-in OK'));
    } else {
      this.invalidLogin = true;
      alert(data.message);
    }
  }

}
