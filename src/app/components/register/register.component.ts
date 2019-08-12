import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
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
              private authService: AuthenticationService,
              private activatedRoute: ActivatedRoute) { }

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
    if (this.addForm.invalid) {
      return;
    }

    // TODO : Check the validity of the inputs (rq : email is checked in Back End via the annotation @Email in the client entity)
    this.user.username = this.addForm.controls.username.value;
    this.user.password = this.addForm.controls.password.value;
    this.user.firstName = this.addForm.controls.firstName.value;
    this.user.lastName = this.addForm.controls.lastName.value;

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

      // Redirect
      const origin = this.activatedRoute.snapshot.params.origin;
      if (origin === 'checkout') {
        this.router.navigateByUrl('/checkout').then();
      } else {
        this.router.navigateByUrl('/products').then();
      }

    } else {
      this.invalidLogin = true;
      alert(data.message);
    }
  }

}
