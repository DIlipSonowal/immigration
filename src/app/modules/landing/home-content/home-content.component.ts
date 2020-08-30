import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { SwiperContainer } from '../../../swiper/swiper.component';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { HomeService } from '../../../service/home.service';
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
  public our_goals = {sub_header:'', header:'', text_content:'', img:[]};
  public aboutHome = {sub_header:'', header:'', text_content:''};
  public ourService = {sub_header:'', header:'', family:{title:'', para:'', img:''}, work:{title:'', para:'', img:''}, study:{title:'', para:'', img:''}, visit:{title:'', para:'', img:''}, citizenship:{title:'', para:'', img:''}, other:{title:'', para:'', img:''}};
  public howit_works = {sub_header:'', header:'', discussion:{title:'', count:'', para:''}, documentation:{title:'', count:'', para:''}, submission:{title:'', count:'', para:''}};
  public feedback = [{name:'',feedback:'', image:''}];
  public teams = [{image:''}];
  public whyus = { 
    sub_header: "",
    header: "",
    immigration: {
      title1: "",
      count: "",
      title2: "",
      icon: ""
    },
    customer: {
      title1: "",
      count: "",
      title2: "",
      icon: ""
    },
    student: {
      title1: "",
      count: "",
      title2: "",
      icon: ""
    },
    country: {
      title1: "",
      count: "",
      title2: "",
      icon: ""
    }
  };
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

  constructor(private hs:HomeService) {
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

    this.hs.goalSlider().subscribe( (rs:any) => {
        this.our_goals = rs[0];
        //console.log(this.our_goals);
    });

    this.hs.homeAbout().subscribe( (res:any)=> {
      this.aboutHome = res;
      //console.log(this.aboutHome);
    });

    this.hs.whychooseus().subscribe( (res:any)=> {
      this.whyus = res;
    });

    this.hs.immigrationService().subscribe( (res:any)=> {
      this.ourService = res;
      console.log(res);
    });

    this.hs.howitworks().subscribe( (res:any)=> {
        this.howit_works = res;
    });
    
    this.hs.feedBack().subscribe( (res:any)=>{
      this.feedback = res;
    });

    this.hs.getTeams().subscribe( (res:any)=> {
      this.teams = res;
      console.log(res)
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
