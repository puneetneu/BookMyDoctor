import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';

export interface Degree {
  value: string;
}
declare var M: any;
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
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.resetForm();
    this.getdoctor();
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
}
