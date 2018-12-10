import { Injectable } from '@angular/core';
import { CustomerCreateData } from './CustomerCreateData';
import { HttpClient } from '@angular/common/http';
import {appointment} from'./appointment';
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
  getDoctor(speciality: string) {
     return this.http.get('http://localhost:3000/doctor/sp/' + speciality);
  }


  getappointment(time:number, date:string , doctor:string)
  {
    return this.http.get('http://localhost:3000/appointment/time/' + time +'/date/' + date+'/doctor/' + doctor);
  }

  postappointment(app:appointment)
  {
     return this.http.post('http://localhost:3000/appointment/',app);
  }
}

