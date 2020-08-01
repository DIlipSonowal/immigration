import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImmigrateRoutingModule } from './immigrate-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ImmigrateComponent } from './immigrate.component';
import { StartupVisaProgComponent } from './startup-visa-prog/startup-visa-prog.component';
import { SelfEmployedImmigrationComponent } from './self-employed-immigration/self-employed-immigration.component';
import { RuralImmigrationPilotProgComponent } from './rural-immigration-pilot-prog/rural-immigration-pilot-prog.component';
import { RefugeesComponent } from './refugees/refugees.component';
import { AtlantiImmigrationPilotProgramComponent } from './atlanti-immigration-pilot-program/atlanti-immigration-pilot-program.component';


@NgModule({
  declarations: [ ImmigrateComponent, StartupVisaProgComponent, SelfEmployedImmigrationComponent, RuralImmigrationPilotProgComponent, RefugeesComponent, AtlantiImmigrationPilotProgramComponent ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule, SharedModule, ImmigrateRoutingModule
  ],
  exports: [ ImmigrateComponent, StartupVisaProgComponent, SelfEmployedImmigrationComponent, RuralImmigrationPilotProgComponent, RefugeesComponent, AtlantiImmigrationPilotProgramComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ImmigrateModule { }
