import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { ProjectComponent } from './project/project.component';
import { RoadconstructionComponent } from './roadconstruction/roadconstruction.component';

const routes: Routes = [
  {
    component:ContactusComponent,
    path:'contactus'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:CompanyprofileComponent,
    path:'companyprofile'
  },
  {
    component:ProjectComponent,
    path:'project'
  },
  {
    component:RoadconstructionComponent,
    path:'roadconstruction'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
