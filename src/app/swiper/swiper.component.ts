import {Component, Input } from '@angular/core';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-swiper',
  template:
  `<div class="swiper-container" [ngClass]="dclass">
    <div class="swiper-wrapper">
      <ng-content></ng-content>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next" *ngIf="pager"></div>
    <div class="swiper-button-prev" *ngIf="pager"></div>
  </div>`
})
export class SwiperComponent {
  @Input() public pager: any;
  @Input() public options: any;
  @Input() public dclass:string;
  public swiper: any;

  constructor() { }

  public ngOnInit() {
    this.swiper = new Swiper(this.dclass, this.options);
  }
}
