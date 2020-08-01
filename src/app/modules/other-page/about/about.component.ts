import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../service/common.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private cs:CommonService, public router: Router) {}
  
  ngOnInit(): void {
    console.log('//',this.router.url);
    this.cs.contentReady.next(false);
    console.log('');
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
