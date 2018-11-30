import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';
export interface City {
  value: string;
}
declare var M: any;
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
  }
}
