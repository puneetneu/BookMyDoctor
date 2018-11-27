import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DoctorService} from '../shared/doctor.service';
import {Doctor} from '../shared/doctor.model';
import { XhrFactory, HttpClient } from '@angular/common/http';

export interface Food {
  value: string;
  viewValue: string;
}
declare var M :any;

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.scss'],
  providers:[DoctorService]
})
export class DemographicComponent implements OnInit ,AfterViewChecked {
  image:any;
  imageToShow: any;
  random:any;
  selectedFile: File = null;
  fd = new FormData();
  readonly baseURL= 'http://localhost:3000/doctors/images';
  foods: Food[] = [
    {value: 'General Physician', viewValue: 'General Physician'},
    {value: 'Cardiologists',     viewValue: 'Cardiologists'},
    {value: 'Dermatologists',    viewValue: 'Dermatologists '}
  ];
  constructor(private doctorService : DoctorService, private http:HttpClient) {}
  ngAfterViewChecked()
  {
    
  }

  resetForm(form?: NgForm)
  {
    
    if(form) form.reset();
    this.doctorService.selecteddoctor={
      _id:"",
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

  ngOnInit() {
    
    this.resetForm();
    this.getdoctor();
    
    
  }

  onSubmit (form :NgForm)
  {
    this.doctorService.putDoctor(form.value).subscribe((res)=>{
      M.toast({html: 'updated' , classes :'rounded'});  
   });
   this.uploadimage();
   


   
  }

  getdoctor()
  {
    this.doctorService.getDoctor("5bfb10834cb39b6780fcccad").subscribe((res)=>{
    this.doctorService.selecteddoctor=res as Doctor;
    this.getimage();
    });
    
  }
   
  onchange(event)
  {
    this.selectedFile = <File>event.target.files[0];
    console.log(event.target.files[0].name);
    
    var reader  = new FileReader();

       reader.onloadend = () => {
          this.imageToShow  = reader.result;
          this.random= Math.random()+this.selectedFile.name;
          this.doctorService.selecteddoctor.image=this.random;
          //this.doctorService.selecteddoctor.image=this.imageToShow
       }

       if (this.selectedFile) {
           reader.readAsDataURL(this.selectedFile); //reads the data as a URL
       } else {
           this.imageToShow = "";
       }
       
  }

  uploadimage()
  {
    
    this.fd.append('file', this.selectedFile,  this.random);
    this.http.post(this.baseURL, this.fd, {responseType: 'text'})
    .subscribe( (res) => {
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getimage()
 {
   //alert(this.doctorService.selecteddoctor.image);
  this.http.get('http://localhost:3000/img/'+this.doctorService.selecteddoctor.image,{responseType: 'blob'}).subscribe((res) => {
    console.log(res);
  this.createImageFromBlob(res);

   });
 }
  
 
}