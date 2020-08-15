import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  cpath = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const rp = this.router.url.split("/")[1];
    console.log(rp);
    if(rp === "family" || rp === "work" || rp === "immigrate"){
      this.cpath = true;
    }   
  }

}
