import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContentComponent } from './home-content/home-content.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ComnComponent } from '../../components/comn/comn.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  declarations: [ HomeContentComponent, HomeComponent, 
    LandingComponent, CarouselComponent, ComnComponent, OurServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ],
  exports:[ HomeContentComponent, HomeComponent, OurServicesComponent,
     LandingComponent, CarouselComponent, ComnComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LandingModule { }
