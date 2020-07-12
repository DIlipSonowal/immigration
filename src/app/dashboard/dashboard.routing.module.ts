import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { GraphComponent } from './graph/graph.component';
import { HomeContentComponent } from '../home-content/home-content.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
        {path: 'menu', component:MenuComponent},
        {path: '', component:HomeContentComponent}
     ]
    },{
        pathMatch:'', redirectTo:'dashboard/menu', component:DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: [MenuComponent, GraphComponent]
})
export class DashboardRoutingModule { }
