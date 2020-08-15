import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProvincialRoutingModule } from './provincial-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProvincialComponent } from './provincial.component';

@NgModule({
  declarations: [ProvincialComponent],
  imports: [
    CommonModule, RouterModule, SharedModule,
    FormsModule, ReactiveFormsModule, ProvincialRoutingModule
  ],
  exports: [ProvincialComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProvincialModule { }
