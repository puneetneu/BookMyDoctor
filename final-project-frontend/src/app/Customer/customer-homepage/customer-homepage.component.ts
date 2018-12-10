import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../Homepage/auth.service';
import { Subscription } from 'rxjs';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl, NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { DoctorService } from '../../Doctor/shared/doctor.service';
import { Doctor } from '../../Doctor/shared/doctor.model';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import {appointment} from '../appointment';
import { CustomerData } from 'src/app/Homepage/CustomerData';
export interface time {
  value: string;
  no:number;
}
export interface Specialization {
  name: string;
}
export interface timeno{
  from:number;
  to:number;
}
@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.scss']
})
export class CustomerHomepageComponent implements OnInit, OnDestroy {
  timing:time[];
  customer:CustomerData;
  app:appointment;
  myControl = new FormControl();
  userisAuthenticated = false;
  userID: string;
  private authSub: Subscription;
  searchData: Specialization;
  
  today = new Date() ;
  currentDate = new Date().setDate(this.today.getDate()) 
  tdd = this.today.getDate()+1;
  tmm = this.today.getMonth()+1;
  tyyyy = this.today.getFullYear();
  stoday = this.tdd+'-'+this.tmm+'-'+this.tyyyy;
  currentDay= this.today.getDay() %7;
  currenttime:timeno;
  
  secondDate = new Date().setDate(this.today.getDate() + 1);
  sd= new Date(this.secondDate);
  sedd = this.sd.getDate()+1;
  semm = this.sd.getMonth()+1;
  seyyyy = this.sd.getFullYear();
  ssecond = this.sedd+'/'+this.semm+'/'+this.seyyyy;
  secondDay  = (this.today.getDay()+1)%7;
  secondtime : timeno;
  
  thirdDate = new Date().setDate(this.today.getDate() + 2);
  td= new Date(this.secondDate);
  tedd = this.td.getDate()+1;
  temm = this.td.getMonth()+1;
  teyyyy = this.td.getFullYear();
  tsecond = this.tedd+'/'+this.temm+'/'+this.teyyyy;
  thirdDay  =(this.today.getDay()+2)%7;
  thirdtime : timeno;
  
 
  options: Specialization[] = [
    {name: 'General Physician'},
    {name: 'Cardiologists'},
    {name: 'Dermatologists'}
  ];
  filteredOptions: Observable<Specialization[]>;

  constructor(private authService: AuthService, private customerService: CustomerService, private data: DoctorService) { }

  ngOnInit() {
    this.currenttime={
      from:0,
      to:0
    }
    this.secondtime={
      from:0,
      to:0
    }
    this.thirdtime={
      from:0,
      to:0
    }
    this.authSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userisAuthenticated = isAuthenticated;
      this.userID = this.authService.getUserID();
  });
  this.init();
  this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Specialization>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
      this.timing= [
        {value:'No shedule',no:0},{value:'7:00 AM',no:1},{value:'7:15 AM',no:2},{value:'7:30 AM',no:3},{value:'7:45 AM',no:4},
        {value:'8:00 AM',no:5},{value:'8:15 AM',no:6},{value:'8:30 AM',no:7},{value:'8:45 AM',no:8} 
      ];
  }
  init() {
    
    this.data.selecteddoctor= {
      _id: '',
      doctorID: '',
      email: '',
      password: '',
      phonenumber: '',
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
      timing: {
        mon:{ from:0,to:0},tue:{ from:0, to:0},wed:{from:0,to:0},thu:{ from:0,to:0},
        fri:{ from:0, to:0},sat:{from:0,to:0},sun:{from:0,to:0}   
      },
      location:{
        longitude:51.678418,
        latitude:7.809007
      }
    };
    console.log(this.currentDate);
  }
  displayFn(user?: Specialization): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Specialization[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  getDoctorSearch() {
    this.customerService.getDoctor(this.searchData.name).subscribe(response => {
      this.data.doctors = response as Doctor[];
    });

  }
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  seeavailiablity(slot:number,date:string, doctor:string):number{
    let x:appointment[];
    this.customerService.getappointment(slot,date,doctor).subscribe((res)=>{
       x= res as appointment[];
       if(x.length===0) {console.log("no"); return 1;} 
     })
   
     return 0;
  }
  
  book(d_id:string , timeno:number , timevaue:string , date:string )
  {
    if(this.seeavailiablity(timeno,date,d_id)==0) { alert("already booked"); return;}

    this.userID=this.authService.getUserID();
      var name;
      // this.customerService.getCustomerData(this.userID).subscribe((res)=>
      // {
        
      // })
     
     this.app={
      customerID:this.userID,
      doctorID:d_id,
      appointment_date:date,
      appointment_time:timeno,
      appointment_value:timevaue,
      customer_name:"puneet"
     }
     
     this.customerService.postappointment(this.app).subscribe((res)=>{
        
     });
  }

  see()
  {
    console.log("se");
  }
 
}
