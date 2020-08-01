import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-agricultural-workers',
  templateUrl: './agricultural-workers.component.html',
  styleUrls: ['./agricultural-workers.component.scss']
})
export class AgriculturalWorkersComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
