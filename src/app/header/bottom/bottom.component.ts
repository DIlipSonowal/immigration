import { Component, OnInit, HostListener, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],

})
export class BottomComponent implements OnInit {
  isNavbarCollapsed=true;
  familysponsorship=true;
  nrovincialnominees=true;
  immigrateMenu=false;
  @ViewChild('navbarNative', {static:false}) navbarNative: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  displaymenufn(id){
    document.getElementById(id).classList.add('show');
    document.getElementById(id+1).classList.add('show');
  }
  controlmenufn(id){
     document.getElementById(id).classList.remove('show');
     document.getElementById(id+1).classList.remove('show');
  }
  @HostListener('scroll', ['$event'])
  onWindowScroll($event) {
     if(window.pageYOffset >= 98){
       this.navbarNative.nativeElement.classList.add('stiky');
     } else{
      this.navbarNative.nativeElement.classList.remove('stiky');
     }
  }
}
