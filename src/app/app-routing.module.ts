import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HomehomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
    {path: '', component: HomehomeComponent },  
    {path: 'upload', component: UploadComponent},
    {path: 'login', component: LoginComponent },
  ]}, 
  {path :'dashboard', loadChildren:() =>import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'chatbot', component: ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
