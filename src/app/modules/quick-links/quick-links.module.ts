import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuickLinksRoutingModule } from './quick-links-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { QuickLinksComponent } from './quick-links.component';
import { BusinessIdeasComponent } from './business-ideas/business-ideas.component';

@NgModule({
  declarations: [QuickLinksComponent, BusinessIdeasComponent],
  imports: [
    CommonModule,
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule, SharedModule, QuickLinksRoutingModule
  ],
  exports:[ QuickLinksComponent, BusinessIdeasComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class QuickLinksModule { }
