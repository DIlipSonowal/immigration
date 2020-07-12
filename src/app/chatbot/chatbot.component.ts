import { Component, OnInit, AfterViewInit,ViewChild,AfterViewChecked } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit,AfterViewChecked {
  todayDate: string;
  monthArr = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  dateArr = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th',
    '13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th',
    '25th','26th','27th','28th','29th','30th','31st'
  ];
  d = new Date();
  messages: any = [];
  container: HTMLElement; 
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("#addClass").click(function () {
        $('#qnimate').addClass('popup-box-on');
      });
        
      $("#removeClass").click(function () {
        $('#qnimate').removeClass('popup-box-on');
      });
    });
    this.todayDate = this.monthArr[this.d.getMonth()] +' '+this.dateArr[this.d.getDate() - 1]+', '+this.d.getFullYear();  
  }
   ngAfterViewChecked() {        
    this.container = document.getElementById("msgContainer");           
    this.container.scrollIntoView(false);     
   }    
  curTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutess = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutess + ' ' + ampm;
    return strTime;
  }  
  sendMessage(e) {
    let msg = e.target.value;
    let u = {
      msg: msg,
      utype: 'user',
      tm: this.curTime()
    };
    this.messages.push(u);
    e.target.value = '';
    setTimeout(()=>{
      let b = {
        msg: 'Thank you for contating us, we will get back to you very soon.',
        utype: 'bot',
        tm: this.curTime()
      };
      this.messages.push(b);
    },1500);
  }
}
