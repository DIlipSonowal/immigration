import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OtherPageRoutingModule } from './other-page-routing.module';
import { OtherPageComponent } from './other-page.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    OtherPageComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    OtherPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [ OtherPageComponent, AboutComponent , ContactUsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OtherpgModule { }
