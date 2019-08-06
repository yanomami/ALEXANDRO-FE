import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {Register} from '../../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService) { }

  public user: Register = new Register();

  addForm: FormGroup;
  invalidLogin = false;
  errorMessage: string;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }

  onSubmit() {
    this.authService.register(this.user)
      .subscribe( data => {
        this.doAction(data);
        },
        error => {
          this.errorMessage = error.error.message;
          this.invalidLogin = true;
          console.log('Error ! : ' + error);
        }
      );
  }

  doAction(data) {
    if (data.status === 200) {
      const jwtToken = data.result.token;
      this.authService.saveToken(jwtToken);
      this.router.navigateByUrl('/products').then(r => alert('Sign-up OK'));
    } else {
      this.invalidLogin = true;
      alert(data.message);
    }
  }

}
