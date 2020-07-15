import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  phone = "+1 778-728-1999";
  email = " info@v9immigration.com";
  constructor() { }

  ngOnInit(): void {
  }

}
