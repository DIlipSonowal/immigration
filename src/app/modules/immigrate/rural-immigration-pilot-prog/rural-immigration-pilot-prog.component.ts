import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-rural-immigration-pilot-prog',
  templateUrl: './rural-immigration-pilot-prog.component.html',
  styleUrls: ['./rural-immigration-pilot-prog.component.scss']
})
export class RuralImmigrationPilotProgComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
