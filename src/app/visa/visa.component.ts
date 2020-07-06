import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {
  @Input() imagename:string;
  @Input() visatitle:string;
  @Input() visasummary:string;
  constructor() { }

  ngOnInit(): void {
  }

}
