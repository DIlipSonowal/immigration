import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

const dashboardRoutes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: '', component:MenuComponent },
            { path: 'home', loadChildren:()=>import('./dashome/dashome.module').then(m=>m.DashomeModule)},
            { path: 'about-us', loadChildren:()=>import('./dasabout/dasabout.module').then(m=>m.DasaboutModule)}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class DashboardRoutingModule { }
