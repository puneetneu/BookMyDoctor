import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';
import { AuthService } from 'src/app/Homepage/auth.service';
import {MatSnackBar} from '@angular/material';
export interface City {
  value: string;
  
}

declare var M :any;
@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
  cities: City[] = [
    {value: 'Delhi'},
    {value: 'Mumbai'},
    {value: 'Pune'}
  ];
  userID: string;
 
  constructor(private snackBar: MatSnackBar,private doctorService : DoctorService, private authService: AuthService) { }

  resetForm(form?: NgForm)
  {
    
    if(form) form.reset();
    this.doctorService.selecteddoctor={
      _id:"",
      doctorID:"",
      email: "",
      password:"",
      phone: "",
      firstname : "",
      lastname : "",
      speciality : "",
      gender :  "",
      image:"",
      degree : "",
      college :  "",
      eoc : "",
      eoy :  "",  
      clinicname: "",
      cliniccity:"",
      clinicaddress:"",
      timing:{
        mon:{ from:"",to:""},tue:{ from:"", to:""},wed:{from:"",to:""},
        thu:{ from:"",to:""},fri:{ from:"", to:""},sat:{from:"",to:""},sun:{from:"",to:""}   
      }
    }
    
    
    
  }
  ngOnInit() {
    this.userID=this.authService.getUserID();
    this.resetForm();
    this.getdoctor();
    
  }

  onSubmit (form :NgForm)
  {
    this.doctorService.putDoctor(this.doctorService.selecteddoctor).subscribe((res)=>{
      
   });
   this.snackBar.open("details updated", "OK", {
    duration: 2000,
  });
  }

  getdoctor()
  {
    this.doctorService.getDoctor(this.userID).subscribe((res)=>{
    this.doctorService.selecteddoctor=res as Doctor;
    })
  }
}
