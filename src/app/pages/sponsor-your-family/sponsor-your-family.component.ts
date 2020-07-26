import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-sponsor-your-family',
  templateUrl: './sponsor-your-family.component.html',
  styleUrls: ['./sponsor-your-family.component.scss']
})
export class SponsorYourFamilyComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
