import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-sponsor-parents-grandparents',
  templateUrl: './sponsor-parents-grandparents.component.html',
  styleUrls: ['./sponsor-parents-grandparents.component.scss']
})
export class SponsorParentsGrandparentsComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
