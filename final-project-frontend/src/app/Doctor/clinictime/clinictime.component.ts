import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';
import { AuthService } from 'src/app/Homepage/auth.service';
import {MatSnackBar} from '@angular/material';
export interface time {
  value: string;

}
export interface day{
  value:string;
}
declare var M :any;


@Component({
  selector: 'app-clinictime',
  templateUrl: './clinictime.component.html',
  styleUrls: ['./clinictime.component.scss']
})
export class ClinictimeComponent implements OnInit {
  userID: string;
  timing:time[];
  days:day[];

  constructor(private snackBar: MatSnackBar,private doctorService : DoctorService ,private authService: AuthService) {
    this.timing= [
      {value:'7:00 AM'},{value:'7:15 AM'},{value:'7:30 AM'},{value:'7:45 AM'},
      {value:'8:00 AM'},{value:'8:15 AM'},{value:'8:30 AM'},{value:'8:45 AM'},
      {value:'9:00 AM'},{value:'9:15 AM'},{value:'9:30 AM'},{value:'9:45 AM'},
      {value:'10:00 AM'},{value:'10:15 AM'},{value:'10:30 AM'},{value:'10:45 AM'},
      {value:'11:00 AM'},{value:'11:15 AM'},{value:'11:30 AM'},{value:'11:45 AM'}

    ];
    this.days=[{value:"mon"},{value:"tue"},{value:"wed"},{value:"thu"},{value:"fri"},
    {value:"sat"},{value:"sun"},];



  }

  resetForm(form?: NgForm)
  {

    if(form) form.reset();
    this.doctorService.selecteddoctor={
      _id:"",
      doctorID:"",
      email: "",
      password:"",
      phonenumber: "",
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
        mon:{ from:0,to:0},tue:{ from:0, to:0},wed:{from:0,to:0},thu:{ from:0,to:0},
        fri:{ from:0, to:0},sat:{from:0,to:0},sun:{from:0,to:0}
      },
      location:{
        longitude:51.678418,
        latitude:7.809007
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
    if(this.doctorService.selecteddoctor.timing==undefined)
    this.doctorService.selecteddoctor.timing={
      mon:{ from:0,to:0},tue:{ from:0, to:0},wed:{from:0,to:0},thu:{ from:0,to:0},
      fri:{ from:0, to:0},sat:{from:0,to:0},sun:{from:0,to:0}
    }

    })

  }


}
