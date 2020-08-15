import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashomeRoutingModule } from './dashome-routing.module';
import { DashomeComponent } from './dashome.component';



@NgModule({
  declarations: [DashomeComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DashomeRoutingModule
  ],
  exports: [DashomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashomeModule { }
