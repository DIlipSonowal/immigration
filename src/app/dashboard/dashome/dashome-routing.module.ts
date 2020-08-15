import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashomeComponent } from './dashome.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: DashomeComponent, children: [
            
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class DashomeRoutingModule { }
