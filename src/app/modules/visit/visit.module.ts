import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VisitRoutingModule } from './visit-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VisitComponent } from './visit.component';
import { SuperVisaComponent } from './super-visa/super-visa.component';

@NgModule({
  declarations: [VisitComponent, SuperVisaComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule, SharedModule, VisitRoutingModule
  ],
  exports: [ VisitComponent, SuperVisaComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VisitModule { }
