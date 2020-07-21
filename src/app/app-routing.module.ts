import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HomehomeComponent } from './home/home/home.component';
import { FamilySponsershipComponent } from './pages/family-sponsership/family-sponsership.component';
import { AboutComponent } from './pages/about/about.component';
import { AgriculturalWorkersComponent } from './pages/agricultural-workers/agricultural-workers.component';
import { AtlantiImmigrationPilotProgramComponent } from './pages/atlanti-immigration-pilot-program/atlanti-immigration-pilot-program.component';
import { EmployeeSpecificWorkPermitComponent } from './pages/employee-specific-work-permit/employee-specific-work-permit.component';
import { OpenWorkPermitComponent } from './pages/open-work-permit/open-work-permit.component';
import { LaberMarketImpactAssestmentComponent } from './pages/laber-market-impact-assestment/laber-market-impact-assestment.component';
import { WorkPermitExtensionComponent } from './pages/work-permit-extension/work-permit-extension.component';
import { InternationalExperiencesComponent } from './pages/international-experiences/international-experiences.component';
import { GlobalSkillsStrategyComponent } from './pages/global-skills-strategy/global-skills-strategy.component';
import { OnCampusWorkComponent } from './pages/on-campus-work/on-campus-work.component';
import { CoopWorkPermitComponent } from './pages/coop-work-permit/coop-work-permit.component';
import { SelfEmployedImmigrationComponent } from './pages/self-employed-immigration/self-employed-immigration.component';
import { StartupVisaProgComponent } from './pages/startup-visa-prog/startup-visa-prog.component';
import { RuralImmigrationPilotProgComponent } from './pages/rural-immigration-pilot-prog/rural-immigration-pilot-prog.component';
import { StudentDirectStreamComponent } from './pages/student-direct-stream/student-direct-stream.component';
import { SuperVisaComponent } from './pages/super-visa/super-visa.component';
import { RefugeesComponent } from './pages/refugees/refugees.component';
import { SponsorYourFamilyComponent } from './pages/sponsor-your-family/sponsor-your-family.component';
import { SponsorDependentChildComponent } from './pages/sponsor-dependent-child/sponsor-dependent-child.component';
import { SponsorParentsGrandparentsComponent } from './pages/sponsor-parents-grandparents/sponsor-parents-grandparents.component';
import { SponsorRelativesComponent } from './pages/sponsor-relatives/sponsor-relatives.component';
import { AdoptedChildComponent } from './pages/adopted-child/adopted-child.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { AntiFraudPolicyComponent } from './components/anti-fraud-policy/anti-fraud-policy.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
    {path: '', component: HomehomeComponent },  
    {path: 'familySponsership', component: FamilySponsershipComponent },  
    {path: 'about', component:AboutComponent},
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
    {path: 'self-employed-immigration-prog', component:SelfEmployedImmigrationComponent },
    {path: 'startup-visa-prog', component:StartupVisaProgComponent },
    {path: 'rural-immigration-pilot-prog', component:RuralImmigrationPilotProgComponent },
    {path: 'student-direct-stream', component:StudentDirectStreamComponent },
    {path: 'super-visa', component:SuperVisaComponent },
    {path: 'refugees', component:RefugeesComponent },
    {path: 'sponsor-your-spouse', component:SponsorYourFamilyComponent },
    {path: 'sponsor-dependent-child', component:SponsorDependentChildComponent },
    {path: 'sponsor-parents-grandparents', component:SponsorParentsGrandparentsComponent },
    {path: 'sponsor-relatives', component:SponsorRelativesComponent },
    {path: 'adopted-child', component:AdoptedChildComponent },
    {path: 'terms-and-condition', component:TermsConditionComponent },
    {path: 'disclaimer', component:DisclaimerComponent },
    {path: 'copyright', component:CopyrightComponent },
    {path: 'privacy-policy', component:PrivacyPolicyComponent },
    {path: 'cookie-policy', component:CookiePolicyComponent },
    {path: 'anti-fraud-policy', component:AntiFraudPolicyComponent },
    {path: 'coming-soon', component:CommingSoonComponent },
  ]}, 
  {path :'dashboard', loadChildren:() =>import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'chatbot', component: ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
