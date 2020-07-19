import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './header/top/top.component';
import { MiddleComponent } from './header/middle/middle.component';
import { BottomComponent } from './header/bottom/bottom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { VisaComponent } from './visa/visa.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { HomeContentComponent } from './home-content/home-content.component';
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
import { SideBarComponent } from './pages/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    CarouselComponent,
    HomeComponent,
    VisaComponent,
    ChatbotComponent,
    FooterComponent,
    LoginComponent,
    UploadComponent,
    HomeContentComponent,
    HomehomeComponent,
    FamilySponsershipComponent,
    AboutComponent,
    AgriculturalWorkersComponent,
    AtlantiImmigrationPilotProgramComponent,
    EmployeeSpecificWorkPermitComponent,
    OpenWorkPermitComponent,
    LaberMarketImpactAssestmentComponent,
    WorkPermitExtensionComponent,
    InternationalExperiencesComponent,
    GlobalSkillsStrategyComponent,
    OnCampusWorkComponent,
    CoopWorkPermitComponent,
    SelfEmployedImmigrationComponent,
    StartupVisaProgComponent,
    RuralImmigrationPilotProgComponent,
    StudentDirectStreamComponent,
    SuperVisaComponent,
    RefugeesComponent,
    SponsorYourFamilyComponent,
    SponsorDependentChildComponent,
    SponsorParentsGrandparentsComponent,
    SponsorRelativesComponent,
    AdoptedChildComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
