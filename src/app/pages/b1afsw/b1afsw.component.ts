import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-b1afsw',
  templateUrl: './b1afsw.component.html',
  styleUrls: ['./b1afsw.component.scss']
})
export class B1afswComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
