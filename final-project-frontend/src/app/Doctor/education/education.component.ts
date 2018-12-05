import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';

export interface Degree {
  value: string;
<<<<<<< HEAD
  
}
declare var M :any;
=======
}
declare var M: any;
>>>>>>> origin
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  degrees: Degree[] = [
    {value: 'BDS'},
    {value: 'MBBS'},
    {value: 'MDS'},
    {value: 'MDS-Oral & Maxillofacial Surgery'},
    {value: 'BHMS'},
    {value: 'BAMS'},
    {value: 'MS-General Surgery'},
    {value: 'BPTh/BPT'},
    {value: 'MD-Medicine'},
  ];
<<<<<<< HEAD
  constructor(private doctorService : DoctorService) { }
=======
  constructor(private doctorService: DoctorService) { }
>>>>>>> origin

  ngOnInit() {
    this.resetForm();
    this.getdoctor();
<<<<<<< HEAD
   
  }

  resetForm(form?: NgForm)
  {
    
    if(form) form.reset();
    this.doctorService.selecteddoctor={
      _id:"",
      doctor_id:"",
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
    }
    
  }

  onSubmit (form :NgForm)
  {
    this.doctorService.putDoctor(form.value).subscribe((res)=>{
      M.toast({html: 'updated' , classes :'rounded'});  
   });
  }

  getdoctor()
  {
    this.doctorService.getDoctor("92").subscribe((res)=>{
    this.doctorService.selecteddoctor=res as Doctor;
    })
  }

=======
  }

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
      image: '',
      degree : '',
      college :  '',
      eoc : '',
      eoy :  '',
      clinicname: '',
      cliniccity: '',
      clinicaddress: '',
    };
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
  }
>>>>>>> origin
}
