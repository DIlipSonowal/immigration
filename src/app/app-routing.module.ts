import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';

import { ChatbotComponent } from './chatbot/chatbot.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { AntiFraudPolicyComponent } from './components/anti-fraud-policy/anti-fraud-policy.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { BusinessIdeasComponent } from './pages/business-ideas/business-ideas.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

const routes: Routes = [
 /* {path: 'testtt', component: FamilySponsershipComponent, children:[  
    {path: '', component: FamilySponsershipComponent },  
    {path: 'upload', component: UploadComponent},
    {path: 'login', component: LoginComponent },
    {path: 'agricultural-workers', component:AgriculturalWorkersComponent },
    {path: 'employee-specific-work-permit', component:EmployeeSpecificWorkPermitComponent },
    {path: 'atlanti-immigration-pilot-program', component:AtlantiImmigrationPilotProgramComponent },
    {path: 'open-work-permit', component:OpenWorkPermitComponent },
    {path: 'laber-market-impact-assestment', component:LaberMarketImpactAssestmentComponent },
    {path: 'work-permit-extension', component:WorkPermitExtensionComponent },
    {path: 'international-experiences', component:InternationalExperiencesComponent },
    {path: 'global-skills-strategy', component:GlobalSkillsStrategyComponent },
    {path: 'oncampus-work', component:OnCampusWorkComponent },
    {path: 'coop-work-permit', component:CoopWorkPermitComponent },
    {path: 'self-employed-immigration-prog  ', component:SelfEmployedImmigrationComponent },
    {path: 'startup-visa-prog', component:StartupVisaProgComponent },
    {path: 'rural-immigration-pilot-prog', component:RuralImmigrationPilotProgComponent },
    {path: 'student-direct-stream', component:StudentDirectStreamComponent },
    {path: 'super-visa', component:SuperVisaComponent },
    {path: 'refugees', component:RefugeesComponent },
    {path: 'terms-and-condition', component:TermsConditionComponent },
    {path: 'disclaimer', component:DisclaimerComponent },
    {path: 'copyright', component:CopyrightComponent },
    {path: 'privacy-policy', component:PrivacyPolicyComponent },
    {path: 'cookie-policy', component:CookiePolicyComponent },
    {path: 'anti-fraud-policy', component:AntiFraudPolicyComponent },
    {path: 'coming-soon', component:CommingSoonComponent },
    {path: 'business-ideas', component:BusinessIdeasComponent },
    {path: 'our-services', component:OurServicesComponent },
    {path: 'quebec', component:QuebecComponent },
    {path: 'b1afsw', component:B1afswComponent },
    {path: 'b1bcec', component:B1bcecComponent },
    {path: 'b1cfst', component:B1cfstComponent },
    {path: 'b2pnp', component:B2pnpComponent },
    {path: 'care-giver', component:CareGiverComponent },
  ]}, */
  { path: '', loadChildren:()=> import('./modules/landing/landing.module').then(m=>m.LandingModule)},
  { path: 'information', loadChildren:()=> import('./modules/other-page/otherpg.module').then(m => m.OtherpgModule) },
  { path: 'dashboard', loadChildren:() =>import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'family', loadChildren:() =>import('./modules/family/family.module').then(m => m.FamilydModule)},
  { path: 'provincial-nominees',  loadChildren: ()=>import('./modules/provincial-nominees/provincial-nominees.module').then(m=>m.ProvincialNomineesModule)},
  { path: 'immigrate', loadChildren:()=> import('./modules/immigrate/immigrate.module').then(m=>m.ImmigrateModule)},
  { path: 'work', loadChildren:()=>import('./modules/work/work.module').then(m=>m.WorkModule)},
  { path: 'study', loadChildren:()=>import('./modules/study/study.module').then(m=>m.StudyModule)},
  { path: 'visit', loadChildren:()=>import('./modules/visit/visit.module').then(m=>m.VisitModule)},
  { path: 'other', loadChildren:()=>import('./modules/other/other.module').then(m=>m.OtherModule)},
  { path: 'citizenship', loadChildren:()=>import('./modules/citizenship/citizenship.module').then(m=>m.CitizenshipModule)},
  { path: 'calculator', loadChildren:()=>import('./modules/calculator/calculator.module').then(m=>m.CalculatorModule)},
  { path: 'provincial', loadChildren:()=>import('./modules/provincial/provincial.module').then(m=>m.ProvincialModule)}
  // { path: '***', redirectTo: '' , pathMatch: 'full'}
  // { path: 'chatbot', component: ChatbotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
