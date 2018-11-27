import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from './doctor.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  selecteddoctor : Doctor;
  doctors: Doctor[];
  readonly baseURL= 'http://localhost:3000/doctors';
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
}
