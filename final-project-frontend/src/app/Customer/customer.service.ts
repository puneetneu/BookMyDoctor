import { Injectable } from '@angular/core';
import { CustomerCreateData } from './CustomerCreateData';
import { HttpClient } from '@angular/common/http';
import {appointment} from'./appointment';
import {map} from 'rxjs/operators';

<<<<<<< HEAD
// services for customers
=======

>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerData: CustomerCreateData;

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
// service for creating new customer
=======

  //create customer profile
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
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

<<<<<<< HEAD
  // service to get the customer details
=======
  //get customer 
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
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

<<<<<<< HEAD
  // service to get doctors speciality
=======
  //get doctor through speciality
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
  getDoctor(speciality: string) {
     return this.http.get('http://localhost:3000/doctor/sp/' + speciality);
  }

<<<<<<< HEAD
// service to get appointments booked date and doctor
=======
 // check appointment
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
  getappointment(time:number, date:string , doctor:string)
  {
    return this.http.get('http://localhost:3000/appointment/time/' + time +'/date/' + date+'/doctor/' + doctor);
  }

<<<<<<< HEAD
  // service to create appointments
=======
  //post appointment
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
  postappointment(app:any)
  {
     return this.http.post('http://localhost:3000/appointment/',app);
  }
<<<<<<< HEAD

  // service to get customer id who booked appointment
=======
  
  // get appointnment for particular customer 
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
  getappoinments(_id:string)
  {
    return this.http.get('http://localhost:3000/appointment/cust'+`/${_id}`);
  }

<<<<<<< HEAD
  // service to get appointments by id
=======
  //get appointment through id 
>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
  getoneapp(_id:string)
  {
    return this.http.get('http://localhost:3000/appointment/one'+`/${_id}`);
  }
<<<<<<< HEAD
=======

  // send mail
  mail(time:string, dname:string , date:string)
  {
    return this.http.get('http://localhost:3000/email/'+ time + '/dname/' + dname + '/date/'+date);
  }


>>>>>>> 568cb68c614f593f5c164d96143771c74a2fb232
}

