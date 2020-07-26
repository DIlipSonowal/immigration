import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-sponsor-dependent-child',
  templateUrl: './sponsor-dependent-child.component.html',
  styleUrls: ['./sponsor-dependent-child.component.scss']
})
export class SponsorDependentChildComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }
}
