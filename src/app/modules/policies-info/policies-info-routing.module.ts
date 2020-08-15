import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { PoliciesInfoComponent } from './policies-info.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { AntiFraudPolicyComponent } from './anti-fraud-policy/anti-fraud-policy.component';


const routes: Routes = [
    { path: '', component: PoliciesInfoComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
         { path: 'terms-and-condition', component:  TermsConditionComponent},
         { path: 'disclaimer', component:  DisclaimerComponent},
         { path: 'copyright', component:  CopyrightComponent},
         { path: 'privacy-policy', component:  PrivacyPolicyComponent},
         { path: 'cookie-policy', component:  CookiePolicyComponent},
         { path: 'anti-fraud-policy', component: AntiFraudPolicyComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoliciesInfoRoutingModule { }