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
import { MainComponent } from './Doctor/main/main.component';
import { AboutUsComponent } from './Homepage/about-us/about-us.component';
import { ContactUsComponent } from './Homepage/contact-us/contact-us.component';
import { FooterComponent } from './Homepage/footer/footer.component';
import { HomeComponent } from './Homepage/home/home.component';
import { LoginCreateComponent } from './Homepage/login-create/login-create.component';
import { NavigationComponent } from './Homepage/navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
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
