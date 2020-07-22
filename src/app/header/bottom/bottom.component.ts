import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  controlmenufn(id){
     document.getElementById(id).classList.remove('show');
     document.getElementById(id+1).classList.remove('show');
  }

}
