import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OtherRoutingModule } from './other-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OtherComponent } from './other.component';


@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule, RouterModule, SharedModule,
    FormsModule, ReactiveFormsModule, OtherRoutingModule
  ],
  exports: [OtherComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OtherModule { }
