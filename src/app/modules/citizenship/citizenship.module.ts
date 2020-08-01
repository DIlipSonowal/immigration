import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CitizenshipComponent } from './citizenship.component';

@NgModule({
  declarations: [CitizenshipComponent],
  imports: [
    CommonModule, RouterModule, SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [CitizenshipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CitizenshipModule { }
