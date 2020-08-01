import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-sponsor-relatives',
  templateUrl: './sponsor-relatives.component.html',
  styleUrls: ['./sponsor-relatives.component.scss']
})
export class SponsorRelativesComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }
}
