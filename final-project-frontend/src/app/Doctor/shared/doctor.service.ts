import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor } from './doctor.model';
import {appointment} from '../../Customer/appointment';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  selecteddoctor : Doctor;
  doctors: Doctor[];
  lat:number;
  readonly appURL='http://localhost:3000/appointment';
  readonly custURL='http://localhost:3000/customer';
  readonly baseURL= 'http://localhost:3000/doctor';
  constructor(private http :HttpClient) { }

  // update a doctor
  postDoctor(emp: Doctor)
  {
    return this.http.post(this.baseURL,emp);
  }

  // create a doctor
  putDoctor(emp:Doctor)
  {
    return this.http.put(this.baseURL + `/${emp._id}` , emp);
  }

  //get a doctor
  getDoctor(_id:string)
  {
     return this.http.get(this.baseURL + `/${_id}` );
  }

  // get doctors appointments
  getappoinments(_id:string)
  {
    return this.http.get(this.appURL+`/${_id}`);
  }

  //gets customer
  getcustomer(_id:string)
  {
    return this.http.get(this.custURL+ `/${_id}`);
  }

  //create updated appointment
  updateapp(app:appointment)
  {
    return this.http.put(this.appURL+`/${app._id}` ,app);
  }

  //get an instance of appointment
  getoneapp(_id:string)
  {
    return this.http.get('http://localhost:3000/appointment/one'+`/${_id}`);
  }
}
