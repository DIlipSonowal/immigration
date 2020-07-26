import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-quebec',
  templateUrl: './quebec.component.html',
  styleUrls: ['./quebec.component.scss']
})
export class QuebecComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
