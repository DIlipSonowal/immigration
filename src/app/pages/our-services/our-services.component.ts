import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  basicOptions = ["1 person", "24 / 7 Support *", "Advance Options *"];
  constructor() { }

  ngOnInit(): void {
  }
  
}
