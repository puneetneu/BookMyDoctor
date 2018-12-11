import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DoctorService} from '../shared/doctor.service';
import { Doctor } from '../shared/doctor.model';


export interface DialogData {
  customerID: string;
  doctorID: string;
}
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
        mon:{ from:0,to:0},tue:{ from:0, to:0},wed:{from:0,to:0},thu:{ from:0,to:0},
        fri:{ from:0, to:0},sat:{from:0,to:0},sun:{from:0,to:0}
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

  pdf()
  {
    var docDefinition = {
      content: [
        // if you don't need styles, you can use a simple string to define a paragraph
        'This is a standard paragraph, using default style',

        // using a { text: '...' } object lets you set styling properties
        { text: 'This paragraph will have a bigger font', fontSize: 15 },

        // if you set pass an array instead of a string, you'll be able
        // to style any fragment individually
        {
          text: [
            'This paragraph is defined as an array of elements to make it possible to ',
            { text: 'restyle part of it and make it bigger ', fontSize: 15 },
            'than the rest.'
          ]
        }
      ]
    };


  }


}
