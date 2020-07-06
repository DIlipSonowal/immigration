import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  company_name:string;
  constructor() { }

  ngOnInit(): void {
    this.company_name = "V9 Immigration"
  }

}
