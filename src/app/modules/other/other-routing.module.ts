import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { OtherComponent } from './other.component';

const routes: Routes = [
    { path: '', component: OtherComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule { }