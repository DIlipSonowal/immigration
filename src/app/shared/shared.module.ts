import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { TopComponent } from '../header/top/top.component';
import { MiddleComponent } from '../header/middle/middle.component';
import { BottomComponent } from '../header/bottom/bottom.component';
import { SideBarComponent } from '../pages/side-bar/side-bar.component';
import { VisaComponent } from '../modules/other-page/visa/visa.component';
import { CommingSoonComponent } from '../components/comming-soon/comming-soon.component';
import { SidebarlinkComponent } from '../pages/sidebarlink/sidebarlink.component';
// import { SwiperComponent } from '../swiper/swiper.component';

@NgModule({
  declarations: [FooterComponent, TopComponent,
    MiddleComponent, SideBarComponent,VisaComponent,
    BottomComponent, CommingSoonComponent, SidebarlinkComponent],
  imports: [
    CommonModule,
    NgbModule, FormsModule, RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterComponent, TopComponent, FormsModule, RouterModule,
    MiddleComponent, NgbModule, CommonModule, CommingSoonComponent, SidebarlinkComponent,
    BottomComponent, SideBarComponent, VisaComponent ]
})
export class SharedModule { }
