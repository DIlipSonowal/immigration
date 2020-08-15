import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
    { path: '', component: LandingComponent, children:[
        { path: '', component: HomeComponent},       
        { path: 'our-services', component:OurServicesComponent},
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }