import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { SwiperContainer } from '../../../swiper/swiper.component';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  slideIndex = 1; private i; private slides; private dots;

  //@ViewChild('homeSlide', {static: true}) public swiperContainer2;

  // public swipeOptions = {
  //   spaceBetween: 0,
  //   loop: true,
  //   speed: 1000,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // };
  swiperContainerFeedback = { 
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  };

  swiperContainer = {
      speed: 1000,
      spaceBetween:30,
      centeredSlides: true,
      slidesPerView: 3,
      autoplay: {
        delay: 2500
      }
  };

  constructor() {
   }

  ngOnInit(): void {
     this.swipercomponent();
    var spr = new Swiper('.swiper-container-feedback', {
      speed: 1000,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // }
    });
  }

  swipercomponent() {
    new Swiper('.swiper-container', {
      speed: 1000,
      spaceBetween:30,
      centeredSlides: true,
      slidesPerView: 3,
      autoplay: {
        delay: 2500
      }
    });
  }

  // goToNextPage() {
  //   this.homeSlide.swiper.slideNext();
  // }
// ngAfterViewInit() {
//   this.slides = document.getElementsByClassName('mySlides');
//   this.dots = document.getElementsByClassName('dot');
//   // console.log('slides', this.slides);
//   this.showSlides(this.slideIndex);
// }
//   showSlides(n) {
//     if (n > this.slides.length) { this.slideIndex = 1; }
//     if (n < 1) { this.slideIndex = this.slides.length; }
//     for (let i = 0; i < this.slides.length; i++) {
//       this.slides[i].style.display = 'none';
//     }
//     for (let i = 0; i < this.dots.length; i++) {
//       this.dots[i].className = this.dots[i].className.replace(' active', '');
//     }
//     this.slides[this.slideIndex - 1].style.display = 'block';
//     this.dots[this.slideIndex - 1].className += ' active';
//   }

//   plusSlides(n) {
//     this.showSlides(this.slideIndex += n);
//   }
//   currentSlide(n) {
//     this.showSlides(this.slideIndex = n);
//   }

}
