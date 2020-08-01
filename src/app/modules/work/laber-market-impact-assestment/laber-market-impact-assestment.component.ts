import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-laber-market-impact-assestment',
  templateUrl: './laber-market-impact-assestment.component.html',
  styleUrls: ['./laber-market-impact-assestment.component.scss']
})
export class LaberMarketImpactAssestmentComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }
}
