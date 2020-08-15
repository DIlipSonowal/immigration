import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { ProvincialComponent } from './provincial.component';
const routes: Routes = [
    { path: '', component: ProvincialComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProvincialRoutingModule { }