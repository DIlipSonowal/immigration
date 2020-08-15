import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [533, 700, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {
    // // customize default values of carousels used by this component tree
    // config.interval = 10000;
    // config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  ngOnInit(): void {
    new Swiper('.swiper-container-top', {
      speed: 1000,
      centeredSlides: true,
      autoplay: {
        delay: 3000
      }
    });
  }

  

}
