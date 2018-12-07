import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';

@NgModule({
  declarations: [
    AppComponent,
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
    EducationComponent,
    CustomerPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
