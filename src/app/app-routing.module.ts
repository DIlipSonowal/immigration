import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:[
   
  ] },
  { path: 'login', component: LoginComponent },
  {path: 'upload', component: UploadComponent},
  {path: '', component:DashboardComponent, children:[{
    path:'dashboard',component:DashboardComponent,
  }]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
