import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    AppComponent,
    ClinicComponent,
    DemographicComponent,
    EducationComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
