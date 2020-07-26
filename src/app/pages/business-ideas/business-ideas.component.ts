import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-business-ideas',
  templateUrl: './business-ideas.component.html',
  styleUrls: ['./business-ideas.component.scss']
})
export class BusinessIdeasComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
