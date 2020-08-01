import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProvincialRoutingModule } from './provincial-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProvincialComponent } from './provincial.component';
import { B1afswComponent } from './b1afsw/b1afsw.component';
import { B1bcecComponent } from './b1bcec/b1bcec.component';
import { B1cfstComponent } from './b1cfst/b1cfst.component';
import { B2pnpComponent } from './b2pnp/b2pnp.component';
import { CareGiverComponent } from './care-giver/care-giver.component';

@NgModule({
  declarations: [ProvincialComponent, B1afswComponent, B1bcecComponent, B1cfstComponent, B2pnpComponent, CareGiverComponent],
  imports: [
    CommonModule, RouterModule, SharedModule,
    FormsModule, ReactiveFormsModule, ProvincialRoutingModule
  ],
  exports: [ProvincialComponent, B1afswComponent, B1bcecComponent, B1cfstComponent, B2pnpComponent, CareGiverComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProvincialModule { }
