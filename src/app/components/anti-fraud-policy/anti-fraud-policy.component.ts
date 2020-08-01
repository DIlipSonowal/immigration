import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-anti-fraud-policy',
  templateUrl: './anti-fraud-policy.component.html',
  styleUrls: ['./anti-fraud-policy.component.scss']
})
export class AntiFraudPolicyComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 200);
  }

}
