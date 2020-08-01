import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-b2pnp',
  templateUrl: './b2pnp.component.html',
  styleUrls: ['./b2pnp.component.scss']
})
export class B2pnpComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }
}
