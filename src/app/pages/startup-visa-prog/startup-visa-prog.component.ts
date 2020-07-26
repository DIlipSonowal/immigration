import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-startup-visa-prog',
  templateUrl: './startup-visa-prog.component.html',
  styleUrls: ['./startup-visa-prog.component.scss']
})
export class StartupVisaProgComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
