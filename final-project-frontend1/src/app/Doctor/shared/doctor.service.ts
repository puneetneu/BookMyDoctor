import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor } from './doctor.model';


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


  postDoctor(emp: Doctor)
  {
    return this.http.post(this.baseURL,emp);
  }

  putDoctor(emp:Doctor)
  {
    return this.http.put(this.baseURL + `/${emp._id}` , emp);
  }

  getDoctor(_id:string)
  {
     return this.http.get(this.baseURL + `/${_id}` );
  }
 
  getappoinments(_id:string)
  {
    return this.http.get(this.appURL+`/${_id}`);
  }

  getcustomer(_id:string)
  {
    return this.http.get(this.custURL+ `/${_id}`);
  }
  
}
