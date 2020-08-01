import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FamilySponsershipComponent } from './family-sponsership/family-sponsership.component';
import { SponsorYourFamilyComponent } from './sponsor-your-family/sponsor-your-family.component';
import { SponsorDependentChildComponent } from './sponsor-dependent-child/sponsor-dependent-child.component';
import { SponsorParentsGrandparentsComponent } from './sponsor-parents-grandparents/sponsor-parents-grandparents.component';
import { SponsorRelativesComponent } from './sponsor-relatives/sponsor-relatives.component';
import { AdoptedChildComponent } from './adopted-child/adopted-child.component';
import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FamilySponsershipComponent, SponsorYourFamilyComponent, SponsorDependentChildComponent, SponsorParentsGrandparentsComponent,
    SponsorRelativesComponent, AdoptedChildComponent, FamilyComponent],
  imports: [
    CommonModule,
    FamilyRoutingModule,
    SharedModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  exports: [ FamilySponsershipComponent, SponsorYourFamilyComponent, SponsorDependentChildComponent, SponsorParentsGrandparentsComponent,
    SponsorRelativesComponent, AdoptedChildComponent, FamilyComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FamilydModule { }
