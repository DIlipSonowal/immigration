import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-care-giver',
  templateUrl: './care-giver.component.html',
  styleUrls: ['./care-giver.component.scss']
})
export class CareGiverComponent implements OnInit {

  
  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
