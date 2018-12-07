import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../Homepage/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.scss']
})
export class CustomerHomepageComponent implements OnInit, OnDestroy {

  userisAuthenticated = false;
  userID: string;
  private authSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userisAuthenticated = isAuthenticated;
      this.userID = this.authService.getUserID();
  });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'Enter')
    {
      console.log("event works");
    }
  }

  doctor=[

  {
    firstname: "Dr. Jay",
    lastname: "JO",
    speciality: "Ent",
    gender: "Male",
    image: "/assets/doc.png",
    degree: "MBBS",
    college: "Jayhind",
    eoc: "",
    eoy: "",
    clinicname: "Kaya",
    cliniccity: "Mumbai",
    clinicaddress: "andheri west"
  },

  {
    firstname: "Dr. Jay",
    lastname: "JO",
    speciality: "Ent",
    gender: "Male",
    image: "/assets/doc.png",
    degree: "MBBS",
    college: "Jayhind",
    eoc: "",
    eoy: "",
    clinicname: "Kaya",
    cliniccity: "Mumbai",
    clinicaddress: "andheri west"
  },

  {
    firstname: "Dr. Jay",
    lastname: "Jo",
    speciality: "Ent",
    gender: "Male",
    image: "/assets/doc.png",
    degree: "MBBS",
    college: "Jayhind",
    eoc: "",
    eoy: "",
    clinicname: "Kaya",
    cliniccity: "Mumbai",
    clinicaddress: "andheri west"
  },

  {
    firstname: "Dr. Jay",
    lastname: "Jo",
    speciality: "Ent",
    gender: "Male",
    image: "/assets/doc.png",
    degree: "MBBS",
    college: "Jayhind",
    eoc: "",
    eoy: "",
    clinicname: "Kaya",
    cliniccity: "Mumbai",
    clinicaddress: "andheri west"
  }

];

}
