import { Injectable } from '@angular/core';
import { CustomerCreateData } from './CustomerCreateData';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerData: CustomerCreateData;

  constructor(private http: HttpClient) { }

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
    const newCustomer: CustomerCreateData = {
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
      .put('http://localhost:3000/customer/' + customerid, newCustomer)
      .subscribe(response => {
        console.log(response);
      });
  }
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
}
