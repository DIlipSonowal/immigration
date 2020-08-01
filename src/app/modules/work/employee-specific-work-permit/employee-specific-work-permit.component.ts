import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-employee-specific-work-permit',
  templateUrl: './employee-specific-work-permit.component.html',
  styleUrls: ['./employee-specific-work-permit.component.scss']
})
export class EmployeeSpecificWorkPermitComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
