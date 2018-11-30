import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemographicComponent} from './Doctor/demographic/demographic.component';
import {EducationComponent} from './Doctor/education/education.component';
import {ClinicComponent} from './Doctor/clinic/clinic.component';
import {MainComponent} from './Doctor/main/main.component';
import {HomeComponent} from './Homepage/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'doctor',
    component:MainComponent,
    children :[
      {
        path:'',
        component:DemographicComponent
      },
      {
        path:'education',
        component:EducationComponent
      },
      {
        path:'clinic',
        component:ClinicComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
