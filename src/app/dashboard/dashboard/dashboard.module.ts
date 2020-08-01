import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from '../dashboard.routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
// import {FooterComponent} from '../../components/footer/footer.component';

@NgModule({
    declarations: [
      DashboardComponent,
     //  FooterComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      RouterModule,
      FormsModule,
      SharedModule,
      ReactiveFormsModule
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class DashboardModule { }
  