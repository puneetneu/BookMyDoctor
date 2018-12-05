import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorRegistrationComponent implements OnInit {

  isLoading = false;
  labelPosition = 'doctor';

  constructor(public userCreate: AuthService) { }
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
      createForm.value.createTel);
      createForm.reset();
      this.isLoading = false;
  }
  ngOnInit() {
  }

}
