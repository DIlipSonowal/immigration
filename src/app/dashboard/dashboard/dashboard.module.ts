import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from '../dashboard.routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { GraphComponent } from '../graph/graph.component';
import { SharedModule } from '../../shared/shared.module';
import { DashomeModule } from '../dashome/dashome.module';
import { DasaboutModule } from '../dasabout/dasabout.module';

@NgModule({
    declarations: [
      DashboardComponent, MenuComponent, GraphComponent
     //  FooterComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      RouterModule,
      FormsModule,
      SharedModule,
      ReactiveFormsModule,
      DashomeModule,
      DasaboutModule
    ],
    exports: [DashboardComponent, MenuComponent, GraphComponent],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class DashboardModule { }
  