import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvincialNomineesComponent } from './provincial-nominees.component';
import { QuebecComponent } from './quebec/quebec.component';
import { ComnComponent } from '../../components/comn/comn.component';

const routes: Routes = [
    { path: '', component: ProvincialNomineesComponent, children:[
         { path: 'quebec', component: QuebecComponent}, 
         { path: 'coming-soon', component: ComnComponent}   
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProvincialNomineesRoutingModule { }
