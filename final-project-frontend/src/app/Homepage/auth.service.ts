import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerData } from './CustomerData';
import { DoctorData } from './DoctorData';
import { Auth } from './Auth';
import { Router, RouterStateSnapshot } from '@angular/router';
import { UserData } from './UserData';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private typeOfUser: string;
  private userID: string;
  private authStatusListener = new Subject<boolean>();
  private doctorstatusListener = new Subject<boolean>();
  private isCustomerAuthenticated = false;
  private isDoctorAuthenticated = false;
  private userNotFound = false;
  private isnotAuthenticated = false;
  private msg: string;
  constructor(private router: Router, private http: HttpClient) {}

  createCustomer(
    customerid: string,
    firstName: string,
    lastName: string,
    emailID: string,
    pwd: string,
    tou: string,
    phoneNumber: string
  ) {
    const newCustomer: CustomerData = {
      customerID: customerid,
      firstname: firstName,
      lastname: lastName,
      email: emailID,
      password: pwd,
      typeofUser: tou,
      phonenumber: phoneNumber
    };
    this.http
      .post('http://localhost:3000/customer', newCustomer)
      .subscribe(response => {
      });
  }


  createDoctor(
    doctorID: string,
    firstName: string,
    lastName: string,
    emailID: string,
    pwd: string,
    tou: string,
    phoneNumber: string
  ) {
    const newDoctor: DoctorData = {
      doctorID: doctorID,
      firstname: firstName,
      lastname: lastName,
      email: emailID,
      password: pwd,
      typeofUser: tou,
      phonenumber: phoneNumber
    };
    this.http
      .post('http://localhost:3000/doctor', newDoctor)
      .subscribe(response => {
      });
  }
  createUser(
    firstName: string,
    lastName: string,
    emailID: string,
    pwd: string,
    tou: string,
    phoneNumber: string
  ) {
    const newUser: UserData = {
      firstname: firstName,
      lastname: lastName,
      email: emailID,
      password: pwd,
      typeofUser: tou,
      phonenumber: phoneNumber
    };
    this.http
      .post<{msg: string, id: string}>('http://localhost:3000/signup', newUser)
      .subscribe(response => {
        if (response.msg === 'customer') {
            this.createCustomer(response.id, firstName, lastName, emailID, pwd, tou, phoneNumber);
        } else if (response.msg === 'doctor') {
            this.createDoctor(response.id, firstName, lastName, emailID, pwd, tou, phoneNumber);
        }
      });
  }

  login(email: string, password: string) {
    const authData: Auth = {email_id: email, password: password};
    this.http.post<{token: string, type: string, userID: string, msg: string}>
    ('http://localhost:3000/login', authData).subscribe(response => {
          this.token = response.token;
          this.msg = response.msg;
          this.typeOfUser = response.type;
          this.userID = response.userID;
          if (this.typeOfUser === 'customer' && this.token) {
            this.isCustomerAuthenticated = true;
            this.authStatusListener.next(true);
            this.router.navigate(['/customerHomepage']);
          } else if (this.typeOfUser === 'doctor' && this.token) {
            this.isDoctorAuthenticated = true;
            this.doctorstatusListener.next(true);
            this.router.navigate(['/doctorHome']);
          } else if (this.msg === 'No User Found') {
            this.userNotFound = true;
            this.router.navigate(['']);
          } else if (this.msg === 'Invalid User') {
            this.isnotAuthenticated = true;
            this.router.navigate(['']);
          }
    });
  }

  getAuthenticationStatus() {
   return this.isnotAuthenticated;
  }
  getUserNotFoundStatus() {
    return this.userNotFound;
  }
  getToken() {
    return this.token;
  }

  getDoctorAuthListener() {
    return this.doctorstatusListener.asObservable();
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getUserID() {
    return this.userID;
  }
  getisDoctorAuthenticated() {
  return this.isDoctorAuthenticated;
  }
  getIsCustomerAuth() {
    return this.isCustomerAuthenticated;
  }

  logout() {
    this.token = null;
    this.isCustomerAuthenticated = false;
    this.isDoctorAuthenticated = false;
    this.authStatusListener.next(false);
    this.doctorstatusListener.next(false);
    this.router.navigate(['/']);
  }
}
