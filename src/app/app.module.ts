import { BrowserModule } from '@angular/platform-browser';
//import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { AntiFraudPolicyComponent } from './components/anti-fraud-policy/anti-fraud-policy.component';
import { BusinessIdeasComponent } from './pages/business-ideas/business-ideas.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ServicePlansComponent } from './pages/service-plans/service-plans.component';
import { NewsComponent } from './components/news/news.component';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './modules/landing/landing.module';
import { OtherpgModule } from './modules/other-page/otherpg.module';
import { FamilydModule } from './modules/family/family.module';
import { StudyModule } from './modules/study/study.module';
import { VisitModule } from './modules/visit/visit.module';
import { OtherModule } from './modules/other/other.module';
import { CitizenshipModule } from './modules/citizenship/citizenship.module';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { ProvincialModule } from './modules/provincial/provincial.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatbotComponent,
    LoginComponent,
    UploadComponent,
    TermsConditionComponent,
    DisclaimerComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    AntiFraudPolicyComponent,
    BusinessIdeasComponent,
    OurServicesComponent,
    ServicePlansComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule,
    SharedModule,
    BrowserAnimationsModule,
    LandingModule,
    NgbModule,
    OtherpgModule,
    FamilydModule,
    StudyModule,
    VisitModule,
    OtherModule,
    CitizenshipModule,
    CalculatorModule,
    ProvincialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
