import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from '../dashboard.routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      RouterModule,
      FormsModule
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class DashboardModule { }
  