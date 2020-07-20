import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  container: HTMLElement; 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigationfunction(urlpath, idloc){
    this.router.navigate([urlpath]);
    this.container = document.getElementById(idloc);           
    this.container.scrollIntoView(true);     
  }
}
