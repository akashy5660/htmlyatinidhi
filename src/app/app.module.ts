import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectComponent } from './project/project.component';
import { RoadconstructionComponent } from './roadconstruction/roadconstruction.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyprofileComponent,
    ContactusComponent,
    ProjectComponent,
    RoadconstructionComponent,
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
