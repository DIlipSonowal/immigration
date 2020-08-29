import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../service/home.service';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
import {map} from 'rxjs/Operators';
let endpoint = "http://localhost:8000";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {



  images = [
    {
      sub_header: "",
      header: "",
      text_content: "",
      img: ""
  },
  {
    sub_header: "",
    header: "",
    text_content: "",
    img: ""
  },
  {
    sub_header: "",
    header: "",
    text_content: "",
    img: ""
  }
  ];

  constructor(private http: HttpClient, private hs:HomeService) {}

  ngOnInit(): void {
    new Swiper('.swiper-container-top', {
      speed: 1000,
      centeredSlides: true,
      autoplay: {
        delay: 3000
      }
    });

  this.hs.topSlider().subscribe( (res:any)=>{
     this.images = res;
     console.log(res);
  });
  }

  

}
