import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProvincialNomineesRoutingModule } from './provincial-nominees-routing.module';
import { ProvincialNomineesComponent } from './provincial-nominees.component';
import { QuebecComponent } from './quebec/quebec.component';

@NgModule({
  declarations: [ProvincialNomineesComponent, QuebecComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule, SharedModule, ProvincialNomineesRoutingModule
  ],
  exports: [ProvincialNomineesComponent, QuebecComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProvincialNomineesModule { }
