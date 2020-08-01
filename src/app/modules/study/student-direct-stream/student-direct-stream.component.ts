import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-student-direct-stream',
  templateUrl: './student-direct-stream.component.html',
  styleUrls: ['./student-direct-stream.component.scss']
})
export class StudentDirectStreamComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
