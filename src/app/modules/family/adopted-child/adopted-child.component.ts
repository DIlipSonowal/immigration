import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-adopted-child',
  templateUrl: './adopted-child.component.html',
  styleUrls: ['./adopted-child.component.scss']
})
export class AdoptedChildComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
