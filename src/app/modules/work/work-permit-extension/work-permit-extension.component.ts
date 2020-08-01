import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-work-permit-extension',
  templateUrl: './work-permit-extension.component.html',
  styleUrls: ['./work-permit-extension.component.scss']
})
export class WorkPermitExtensionComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
