import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CalculatorComponent } from './calculator.component';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule, RouterModule, SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [CalculatorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalculatorModule { }
