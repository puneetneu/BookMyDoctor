import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClinicComponent } from './Doctor/clinic/clinic.component';
import { DemographicComponent } from './Doctor/demographic/demographic.component';
import { EducationComponent } from './Doctor/education/education.component';
import { SidebarComponent } from './Doctor/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { MainComponent } from './Doctor/main/main.component';
import { AboutUsComponent } from './Homepage/about-us/about-us.component';
import { ContactUsComponent } from './Homepage/contact-us/contact-us.component';
import { FooterComponent } from './Homepage/footer/footer.component';
import { HomeComponent } from './Homepage/home/home.component';
import { LoginCreateComponent } from './Homepage/login-create/login-create.component';
import { NavigationComponent } from './Homepage/navigation/navigation.component';


=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { LoginCreateComponent } from './Homepage/login-create/login-create.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './Homepage/footer/footer.component';
import { DoctorRegistrationComponent } from './Homepage/doctor-registration/doctor-registration.component';
import { HomeComponent } from './Homepage/home/home.component';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CustomerHomepageComponent } from './Customer/customer-homepage/customer-homepage.component';
import { CustomerAppointmentsComponent } from './Customer/customer-appointments/customer-appointments.component';
import { AuthInterceptor } from './Homepage/auth-interceptor';
import { ClinicComponent } from './Doctor/clinic/clinic.component';
import { DemographicComponent } from './Doctor/demographic/demographic.component';
import { MainComponent } from './Doctor/main/main.component';
import { EducationComponent } from './Doctor/education/education.component';
>>>>>>> origin

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ClinicComponent,
    DemographicComponent,
    EducationComponent,
    SidebarComponent,
    MainComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    LoginCreateComponent,
    NavigationComponent
=======
    LoginCreateComponent,
    FooterComponent,
    DoctorRegistrationComponent,
    HomeComponent,
    CustomerProfileComponent,
    CustomerHomepageComponent,
    CustomerAppointmentsComponent,
    ClinicComponent,
    DemographicComponent,
    MainComponent,
    EducationComponent
>>>>>>> origin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
    
=======
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
>>>>>>> origin
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
