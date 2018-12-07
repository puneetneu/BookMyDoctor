import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorRegistrationComponent } from './Homepage/doctor-registration/doctor-registration.component';
import { LoginCreateComponent } from './Homepage/login-create/login-create.component';
import { CustomerHomepageComponent } from './Customer/customer-homepage/customer-homepage.component';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { CustomerAppointmentsComponent } from './Customer/customer-appointments/customer-appointments.component';
import { CanActivateGuard } from './Homepage/auth.guard';
import { MainComponent } from './Doctor/main/main.component';
import { EducationComponent } from './Doctor/education/education.component';
import { DemographicComponent } from './Doctor/demographic/demographic.component';
import { ClinicComponent } from './Doctor/clinic/clinic.component';

const routes: Routes = [
{ path: '',  component: LoginCreateComponent },
{
  path: 'doctorregistration',
  component: DoctorRegistrationComponent
},
{
  path: 'logincreate',
  component: LoginCreateComponent
},
{
  path: 'customerHomepage',
  component: CustomerHomepageComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'customerProfile',
  component: CustomerProfileComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'customerAppointments',
  component: CustomerAppointmentsComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'BookAppointments',
  component: CustomerPaymentComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'doctorHome',
  component: MainComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'doctorEducation',
  component: EducationComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'doctorprofile',
  component: DemographicComponent,
  canActivate : [CanActivateGuard]
},
{
  path: 'doctorclinic',
  component: ClinicComponent,
  canActivate : [CanActivateGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard]
})
export class AppRoutingModule { }
