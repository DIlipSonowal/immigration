import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { GraphComponent } from './graph/graph.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {path: 'menu', component:MenuComponent}      
     ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: [MenuComponent, GraphComponent]
})
export class DashboardRoutingModule { }
