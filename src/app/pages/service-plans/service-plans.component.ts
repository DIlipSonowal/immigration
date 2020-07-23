import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-plans',
  templateUrl: './service-plans.component.html',
  styleUrls: ['./service-plans.component.scss']
})
export class ServicePlansComponent implements OnInit {
  @Input() visatitle:string;
  @Input() visasummary:string;
  @Input() link:string;
  constructor() { }

  ngOnInit(): void {
  }

}
