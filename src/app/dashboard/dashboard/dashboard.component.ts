import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menucontroller = true;
  @ViewChild('sideMenu',{static:false}) public menu:ElementRef;
  @ViewChild('submenuimmigration',{static:false}) public submenuimmigration:ElementRef;
  @ViewChild('submenuwork',{static:false}) public submenuwork:ElementRef;
  @ViewChild('submenuvisit',{static:false}) public submenuvisit:ElementRef;
  @ViewChild('submenuother',{static:false}) public submenuother:ElementRef;
  @ViewChild('submenucitizenship',{static:false}) public submenucitizenship:ElementRef;
  @ViewChild('submenucalculator',{static:false}) public submenucalculator:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    this.menu.nativeElement.style.width = '250px';
  }
  closeNav(){
    this.menu.nativeElement.style.width = '0';
  }

  submenuOpener(tab){
     this.menucontroller = !this.menucontroller;
     switch(tab) {
       case 'immigration': {
          this.menucontroller? (this.submenuimmigration.nativeElement.style.height = "0"):(this.submenuimmigration.nativeElement.style.height = "350px");
          break;
       }
       case 'work': {
          this.menucontroller? (this.submenuwork.nativeElement.style.height = "0"):(this.submenuwork.nativeElement.style.height = "350px");
          break;
       }
       case 'visit': {
            this.menucontroller? (this.submenuvisit.nativeElement.style.height = "0"):(this.submenuvisit.nativeElement.style.height = "320px");
            break;
       }
       case 'other': {
            this.menucontroller? (this.submenuother.nativeElement.style.height = "0"):(this.submenuother.nativeElement.style.height = "320px");
            break;
       }
       case 'citizenship': {
        this.menucontroller? (this.submenucitizenship.nativeElement.style.height = "0"):(this.submenucitizenship.nativeElement.style.height = "320px");
            break;
       }
       case 'calculator': {
        this.menucontroller? (this.submenucalculator.nativeElement.style.height = "0"):(this.submenucalculator.nativeElement.style.height = "370px");
            break;
       }
       
    }
  }

}
