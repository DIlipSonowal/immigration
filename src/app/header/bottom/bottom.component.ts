import { Component, OnInit, HostListener, ViewChild, ElementRef  } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';
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
  @ViewChild('navbrandImage', {static:false}) navbrandImage: ElementRef;
  constructor(private cs:CommonService, private router:Router) { }

  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=> {this.cs.contentReady.next(true);  }, 100);   
  }
  displaymenufn(id){
    document.getElementById(id).classList.add('show');
    document.getElementById(id+1).classList.add('show');
  }
  controlmenufn(id, type = 'click') {
     //console.log("==>URL",this.router.url);
     const tmpid = id.toLowerCase().replace(/[^a-z0-9]+/g, '');
     
     const idArr = ["id01","id02", "id03", "id04", "id05", "id06", "id07", "id09", "id10", "id11", "id12"];
     if(tmpid !=="id09" && tmpid !=="id10" && tmpid !=="id11" && tmpid !=="id12"){
        document.getElementById(id).classList.remove('show');
        document.getElementById(id+1).classList.remove('show');
     }
     if(type === 'click'){
      // if(tmpid === "id12"){
      //   this.router.navigate(['./information/about-us']);
      // }
      document.getElementById(tmpid) ? document.getElementById(tmpid).classList.add('active-link'): '';
      idArr.forEach( (tid, i) => {
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
       this.navbrandImage.nativeElement.classList.add('hide-nav-image');
     } else{
      this.navbarNative.nativeElement.classList.remove('stiky');
      this.navbrandImage.nativeElement.classList.remove('hide-nav-image');
     }
  }

  
}
