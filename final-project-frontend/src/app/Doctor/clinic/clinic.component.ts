import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';
<<<<<<< HEAD
import { AuthService } from 'src/app/Homepage/auth.service';
import {MatSnackBar} from '@angular/material';
export interface City {
  value: string;
  
}

declare var M :any;
=======
export interface City {
  value: string;
}
declare var M: any;
>>>>>>> origin
@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
<<<<<<< HEAD
=======

>>>>>>> origin
  cities: City[] = [
    {value: 'Delhi'},
    {value: 'Mumbai'},
    {value: 'Pune'}
  ];
<<<<<<< HEAD
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
=======
  constructor(public doctorService: DoctorService) { }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.doctorService.selecteddoctor = {
      _id: '',
      firstname : '',
      lastname : '',
      speciality : '',
      gender :  '',
      degree : '',
      image: '',
      college :  '',
      eoc : '',
      eoy :  '',
      clinicname: '',
      cliniccity: '',
      clinicaddress: '',
    };
  }
  ngOnInit() {
    this.resetForm();
    this.getdoctor();
  }

  onSubmit (form: NgForm) {
    this.doctorService.putDoctor(form.value).subscribe((res) => {
      M.toast({html: 'updated' , classes: 'rounded'});
   });
  }

  getdoctor() {
    this.doctorService.getDoctor('5bfc7eed320c823bacbd745c').subscribe((res) => {
    this.doctorService.selecteddoctor = res as Doctor;
    });
>>>>>>> origin
  }
}
