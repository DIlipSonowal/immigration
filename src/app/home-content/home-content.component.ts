import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit, AfterViewInit {

  slideIndex = 1; private i; private slides; private dots;

  constructor() { }

  ngOnInit(): void {

  }
ngAfterViewInit() {
  this.slides = document.getElementsByClassName('mySlides');
  this.dots = document.getElementsByClassName('dot');
  console.log('slides', this.slides);
  this.showSlides(this.slideIndex);
}
  showSlides(n) {
    if (n > this.slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = this.slides.length; }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' active', '');
    }
    this.slides[this.slideIndex - 1].style.display = 'block';
    this.dots[this.slideIndex - 1].className += ' active';
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

}
