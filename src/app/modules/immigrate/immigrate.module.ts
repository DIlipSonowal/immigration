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
import { CareGiverComponent } from './care-giver/care-giver.component';
import { B1afswComponent } from './b1afsw/b1afsw.component';
import { B1bcecComponent } from './b1bcec/b1bcec.component';
import { B1cfstComponent } from './b1cfst/b1cfst.component';
import { B2pnpComponent } from './b2pnp/b2pnp.component';

@NgModule({
  declarations: [ ImmigrateComponent, StartupVisaProgComponent, SelfEmployedImmigrationComponent, 
    RuralImmigrationPilotProgComponent, RefugeesComponent, B1afswComponent, B1bcecComponent, B1cfstComponent,
    AtlantiImmigrationPilotProgramComponent, CareGiverComponent, B2pnpComponent ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule, SharedModule, ImmigrateRoutingModule
  ],
  exports: [ ImmigrateComponent, StartupVisaProgComponent, SelfEmployedImmigrationComponent, RuralImmigrationPilotProgComponent, 
    RefugeesComponent, AtlantiImmigrationPilotProgramComponent, CareGiverComponent, B1afswComponent, B1bcecComponent, B1cfstComponent,
    B2pnpComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ImmigrateModule { }
