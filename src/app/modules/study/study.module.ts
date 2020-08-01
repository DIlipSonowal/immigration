import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StudyComponent } from './study.component';
import { StudyRoutingModule } from './study-routing.module';
import { OnCampusWorkComponent } from './on-campus-work/on-campus-work.component';
import { CoopWorkPermitComponent } from './coop-work-permit/coop-work-permit.component';
import { StudentDirectStreamComponent } from './student-direct-stream/student-direct-stream.component';

@NgModule({
  declarations: [ StudyComponent, OnCampusWorkComponent, CoopWorkPermitComponent, StudentDirectStreamComponent ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule, SharedModule, StudyRoutingModule
  ],
  exports: [ StudyComponent,  OnCampusWorkComponent, CoopWorkPermitComponent, StudentDirectStreamComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StudyModule { }
