import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
@ViewChild('sideMenu',{static:false}) public menu:ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.menu.nativeElement.style.width = '250px';
  }
  
  ngAfterViewInit(){
  
  }
  openNav(){
    this.menu.nativeElement.style.width = '250px';
  }
  closeNav(){
    this.menu.nativeElement.style.width = '0';
  }
}
