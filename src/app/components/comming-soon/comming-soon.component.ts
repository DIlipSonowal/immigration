import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit {
  days; hours; minutes; seconds;
  constructor() { }

  ngOnInit(): void {
    this.countDown();
  }
  countDown() {
    // Set the date we're counting down to
    const countDownDate = new Date('Aug 15, 2020 15:37:25').getTime();

    // Update the count down every 1 second
    const x = setInterval(() => {

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id='demo'
   /*   document.getElementById('demo').innerHTML = `
      <span style="padding:20px;margin-right:10px;font-size:50px;border:2px solid #fff;color:#fff">${days}
       </span> <span style="padding:20px;margin-right:10px;font-size:50px;border:2px solid #fff;color:#fff">
       ${hours}</span> <span style="padding:20px;margin-right:10px;font-size:50px;border:2px solid #fff;color:#fff"> ${minutes} </span>
       <span style="padding:20px;margin-right:10px;font-size:50px;border:2px solid #fff;color:#fff"> ${seconds} </span>`;
   */
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
}
