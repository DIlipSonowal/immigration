import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-atlanti-immigration-pilot-program',
  templateUrl: './atlanti-immigration-pilot-program.component.html',
  styleUrls: ['./atlanti-immigration-pilot-program.component.scss']
})
export class AtlantiImmigrationPilotProgramComponent implements OnInit {

  constructor(private cs:CommonService) {}
  
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }

}
