import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoliciesInfoRoutingModule } from './policies-info-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PoliciesInfoComponent } from './policies-info.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { AntiFraudPolicyComponent } from './anti-fraud-policy/anti-fraud-policy.component';

@NgModule({
  declarations: [PoliciesInfoComponent, 
    TermsConditionComponent,
    DisclaimerComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    AntiFraudPolicyComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule, PoliciesInfoRoutingModule
  ],
  exports: [PoliciesInfoComponent, 
    TermsConditionComponent,
    DisclaimerComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    AntiFraudPolicyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PoliciesInfoModule { }
