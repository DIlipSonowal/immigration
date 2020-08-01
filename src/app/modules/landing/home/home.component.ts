import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=> {this.cs.contentReady.next(true);  }, 1000);   
  }
   
}
