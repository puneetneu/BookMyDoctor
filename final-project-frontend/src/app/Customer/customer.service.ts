import { Injectable } from '@angular/core';
import { CustomerCreateData } from './CustomerCreateData';
import { HttpClient } from '@angular/common/http';
import {appointment} from'./appointment';
import {map} from 'rxjs/operators';

// services for customers
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerData: CustomerCreateData;

  constructor(private http: HttpClient) { }
// service for creating new customer
  createCustomerProfile(
    customerid: string,
    firstName: string,
    lastName: string,
    emailID: string,
    tou: string,
    phoneNumber: string,
    address: string,
    dob: string,
    bloodGroup: string,
    fmh: string,
    maritalStatus: string,
    voluntary: string,
    gender: string,
    ifm: string
  ) {
    const customer: CustomerCreateData = {
      firstname: firstName,
      lastname: lastName,
      email: emailID,
      typeofUser: tou,
      phonenumber: phoneNumber,
      address: address,
      dob: dob,
      bloodGroup: bloodGroup,
      fmh: fmh,
      maritalStatus: maritalStatus,
      voluntary: voluntary,
      gender: gender,
      ifm: ifm
    };
    this.http
      .put('http://localhost:3000/customer/' + customerid, customer)
      .subscribe(response => {
        console.log('success');
        console.log(response);
      });
  }

  // service to get the customer details
  getCustomerData(customerid: string) {
      return this.http.get<{customer: CustomerCreateData}>('http://localhost:3000/customer/' + customerid)
      .pipe(map((result) => {
          return{
            firstname: result.customer.firstname,
            lastname: result.customer.lastname,
            email: result.customer.email,
            typeofUser: result.customer.typeofUser,
            phonenumber: result.customer.phonenumber,
            address: result.customer.address,
            dob: result.customer.dob,
            bloodGroup: result.customer.bloodGroup,
            fmh: result.customer.fmh,
            maritalStatus: result.customer.maritalStatus,
            voluntary: result.customer.voluntary,
            ifm: result.customer.ifm,
            gender: result.customer.gender
          };
    }));
  }

  // service to get doctors speciality
  getDoctor(speciality: string) {
     return this.http.get('http://localhost:3000/doctor/sp/' + speciality);
  }

// service to get appointments booked date and doctor
  getappointment(time:number, date:string , doctor:string)
  {
    return this.http.get('http://localhost:3000/appointment/time/' + time +'/date/' + date+'/doctor/' + doctor);
  }

  // service to create appointments
  postappointment(app:any)
  {
     return this.http.post('http://localhost:3000/appointment/',app);
  }

  // service to get customer id who booked appointment
  getappoinments(_id:string)
  {
    return this.http.get('http://localhost:3000/appointment/cust'+`/${_id}`);
  }

  // service to get appointments by id
  getoneapp(_id:string)
  {
    return this.http.get('http://localhost:3000/appointment/one'+`/${_id}`);
  }
}

