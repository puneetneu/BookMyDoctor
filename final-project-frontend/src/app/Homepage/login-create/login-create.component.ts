<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ViewEncapsulation } from '@angular/core';
>>>>>>> origin

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
<<<<<<< HEAD
  styleUrls: ['./login-create.component.scss']
})
export class LoginCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

=======
  styleUrls: ['./login-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginCreateComponent implements OnInit {
  isLoading = false;
  labelPosition = 'customer';

  constructor(public userCreate: AuthService) {}

  onCreate(createForm: NgForm) {
    if (createForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.userCreate.createUser(
              createForm.value.firstName,
              createForm.value.lastName,
              createForm.value.email,
              createForm.value.password,
              this.labelPosition,
              createForm.value.createTel
            );
    createForm.reset();
    this.isLoading = false;
    }
  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.userCreate.login(loginForm.value.email, loginForm.value.password);
    this.isLoading = false;
  }
  ngOnInit() {}
>>>>>>> origin
}
