import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-b1bcec',
  templateUrl: './b1bcec.component.html',
  styleUrls: ['./b1bcec.component.scss']
})
export class B1bcecComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }
}
