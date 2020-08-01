import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-on-campus-work',
  templateUrl: './on-campus-work.component.html',
  styleUrls: ['./on-campus-work.component.scss']
})
export class OnCampusWorkComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }
}
