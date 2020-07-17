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
    EmployeeSpecificWorkPermitComponent
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
