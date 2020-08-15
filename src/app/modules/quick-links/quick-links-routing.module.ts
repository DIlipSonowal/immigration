import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { QuickLinksComponent } from './quick-links.component';
import { BusinessIdeasComponent } from './business-ideas/business-ideas.component';

const routes: Routes = [
    { path: '', component: QuickLinksComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
         { path: 'business-ideas', component: BusinessIdeasComponent},
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuickLinksRoutingModule { }
