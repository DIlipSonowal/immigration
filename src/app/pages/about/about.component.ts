import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from '../../service/common.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
