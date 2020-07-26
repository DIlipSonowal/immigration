import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-open-work-permit',
  templateUrl: './open-work-permit.component.html',
  styleUrls: ['./open-work-permit.component.scss']
})
export class OpenWorkPermitComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
