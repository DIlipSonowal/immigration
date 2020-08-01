import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitComponent } from './visit.component';
import { ComnComponent } from '../../components/comn/comn.component';
import { SuperVisaComponent } from './super-visa/super-visa.component';

const routes: Routes = [
    { path: '', component: VisitComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
         { path: 'super-visa', component: SuperVisaComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisitRoutingModule { }
