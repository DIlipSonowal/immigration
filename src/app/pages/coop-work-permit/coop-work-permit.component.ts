import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-coop-work-permit',
  templateUrl: './coop-work-permit.component.html',
  styleUrls: ['./coop-work-permit.component.scss']
})
export class CoopWorkPermitComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }
}
