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
  controlmenufn(id, type = 'click'){
     const tmpid = id.toLowerCase().replace(/[^a-z0-9]+/g, '');
     console.log(tmpid);
     const idArr = ["id01","id02", "id03", "id04", "id05", "id06", "id07", "id08", "id09", "id10", "id11", "id12"];
     if(tmpid !=="id09" && tmpid !=="id10" && tmpid !=="id11" && tmpid !=="id12"){
        document.getElementById(id).classList.remove('show');
        document.getElementById(id+1).classList.remove('show');
     }
     if(type === 'click'){
      document.getElementById(tmpid).classList.add('active-link');
      idArr.forEach( (tid) => {
        if(tid !== tmpid){
          document.getElementById(tid).classList.remove('active-link');
        }
      });
     }
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
