import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { WorkComponent } from './work.component';

import { AgriculturalWorkersComponent } from './agricultural-workers/agricultural-workers.component';
import { EmployeeSpecificWorkPermitComponent } from './employee-specific-work-permit/employee-specific-work-permit.component';
import { OpenWorkPermitComponent } from './open-work-permit/open-work-permit.component';
import { LaberMarketImpactAssestmentComponent } from './laber-market-impact-assestment/laber-market-impact-assestment.component';
import { WorkPermitExtensionComponent } from './work-permit-extension/work-permit-extension.component';
import { InternationalExperiencesComponent } from './international-experiences/international-experiences.component';
import { GlobalSkillsStrategyComponent } from './global-skills-strategy/global-skills-strategy.component';

const routes: Routes = [
    { path: '', component: WorkComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
         { path: 'open-work-permit', component: OpenWorkPermitComponent},
         { path: 'employee-specific-work-permit', component: EmployeeSpecificWorkPermitComponent},
         { path: 'laber-market-impact-assestment', component: LaberMarketImpactAssestmentComponent},
         { path: 'work-permit-extension', component: WorkPermitExtensionComponent},
         { path: 'agricultural-workers', component: AgriculturalWorkersComponent},
         { path: 'international-experiences', component: InternationalExperiencesComponent},
         { path: 'global-skills-strategy', component: GlobalSkillsStrategyComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule { }
