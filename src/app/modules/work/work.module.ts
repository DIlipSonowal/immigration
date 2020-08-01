import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WorkRoutingModule } from './work-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WorkComponent } from './work.component';

import { AgriculturalWorkersComponent } from './agricultural-workers/agricultural-workers.component';
import { EmployeeSpecificWorkPermitComponent } from './employee-specific-work-permit/employee-specific-work-permit.component';
import { OpenWorkPermitComponent } from './open-work-permit/open-work-permit.component';
import { LaberMarketImpactAssestmentComponent } from './laber-market-impact-assestment/laber-market-impact-assestment.component';
import { WorkPermitExtensionComponent } from './work-permit-extension/work-permit-extension.component';
import { InternationalExperiencesComponent } from './international-experiences/international-experiences.component';
import { GlobalSkillsStrategyComponent } from './global-skills-strategy/global-skills-strategy.component';

@NgModule({
  declarations: [ WorkComponent, AgriculturalWorkersComponent, EmployeeSpecificWorkPermitComponent, OpenWorkPermitComponent,
    LaberMarketImpactAssestmentComponent, WorkPermitExtensionComponent, InternationalExperiencesComponent, GlobalSkillsStrategyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    WorkRoutingModule
  ],
  exports: [ WorkComponent, AgriculturalWorkersComponent, EmployeeSpecificWorkPermitComponent, OpenWorkPermitComponent,
    LaberMarketImpactAssestmentComponent, WorkPermitExtensionComponent, InternationalExperiencesComponent, GlobalSkillsStrategyComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WorkModule { }
