import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HomehomeComponent } from './home/home/home.component';
import { FamilySponsershipComponent } from './pages/family-sponsership/family-sponsership.component';
import { AboutComponent } from './pages/about/about.component';
import { AgriculturalWorkersComponent } from './pages/agricultural-workers/agricultural-workers.component';
import { AtlantiImmigrationPilotProgramComponent } from './pages/atlanti-immigration-pilot-program/atlanti-immigration-pilot-program.component';
import { EmployeeSpecificWorkPermitComponent } from './pages/employee-specific-work-permit/employee-specific-work-permit.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
    {path: '', component: HomehomeComponent },  
    {path: 'familySponsership', component: FamilySponsershipComponent },  
    {path: 'about', component:AboutComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'login', component: LoginComponent },
    {path:'agricultural-workers', component:AgriculturalWorkersComponent },
    {path:'employee-specific-work-permit', component:EmployeeSpecificWorkPermitComponent },
    {path: 'atlanti-immigration-pilot-program', component:AtlantiImmigrationPilotProgramComponent }
  ]}, 
  {path :'dashboard', loadChildren:() =>import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'chatbot', component: ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
