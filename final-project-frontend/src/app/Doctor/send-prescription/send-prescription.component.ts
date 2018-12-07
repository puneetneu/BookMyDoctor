import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DoctorService} from '../shared/doctor.service';
import { Doctor } from '../shared/doctor.model';

interface customer {
  firstname:string;
  lastname:string;
  gender:string;
  dob:string;
}
@Component({
  selector: 'app-send-prescription',
  templateUrl: './send-prescription.component.html',
  styleUrls: ['./send-prescription.component.scss']
})
export class SendPrescriptionComponent implements OnInit {
 customer:customer;
 today: number = Date.now();
  constructor(private doctorService : DoctorService,
    public dialogRef: MatDialogRef<SendPrescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.intialisedoctor();
    this.getdoctor();
    this.getcustomer();
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  intialisedoctor()
  {
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
        mon:{ from:"",to:""},tue:{ from:"", to:""},wed:{from:"",to:""},
        thu:{ from:"",to:""},fri:{ from:"", to:""},sat:{from:"",to:""},sun:{from:"",to:""}   
      },
      location:{
        longitude:51.678418,
        latitude:7.809007
      }
    }
    
    this.customer={
      firstname:"",
      lastname:"",
      gender:"",
      dob:"",
      
    }
    
    
  }
  getdoctor()
  {
    this.doctorService.getDoctor(this.data.doctorID).subscribe((res)=>{
      this.doctorService.selecteddoctor=res as Doctor;
      console.log(res);
      console.log(this.doctorService.selecteddoctor);
    })
  }

  getcustomer()
  {
    this.doctorService.getcustomer(this.data.customerID).subscribe((res)=>{
       
       this.customer=res as customer;

       if(this.customer.gender==undefined)this.customer.gender="";
       if(this.customer.dob==undefined)this.customer.dob="";
       
    })
  }
  

}
export interface DialogData {
  customerID: string;
  doctorID: string;
}
