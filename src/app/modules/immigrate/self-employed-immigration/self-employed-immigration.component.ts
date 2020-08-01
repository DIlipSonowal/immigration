import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-self-employed-immigration',
  templateUrl: './self-employed-immigration.component.html',
  styleUrls: ['./self-employed-immigration.component.scss']
})
export class SelfEmployedImmigrationComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
