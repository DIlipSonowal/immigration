import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { ImmigrateComponent } from './immigrate.component';
import { StartupVisaProgComponent } from './startup-visa-prog/startup-visa-prog.component';
import { SelfEmployedImmigrationComponent } from './self-employed-immigration/self-employed-immigration.component';
import { RuralImmigrationPilotProgComponent } from './rural-immigration-pilot-prog/rural-immigration-pilot-prog.component';
import { RefugeesComponent } from './refugees/refugees.component';
import { AtlantiImmigrationPilotProgramComponent } from './atlanti-immigration-pilot-program/atlanti-immigration-pilot-program.component';

const routes: Routes = [
    { path: '', component: ImmigrateComponent, children:[
         { path: 'coming-soon', component: ComnComponent},  
         { path: 'atlanti-immigration-pilot-program', component: AtlantiImmigrationPilotProgramComponent},  
         { path: 'startup-visa-prog', component: StartupVisaProgComponent},  
         { path: 'self-employed-immigration-prog', component: SelfEmployedImmigrationComponent},  
         { path: 'rural-immigration-pilot-prog', component: RuralImmigrationPilotProgComponent},  
         { path: 'refugees', component: RefugeesComponent}  
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImmigrateRoutingModule { }
