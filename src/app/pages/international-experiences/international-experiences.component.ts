import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-international-experiences',
  templateUrl: './international-experiences.component.html',
  styleUrls: ['./international-experiences.component.scss']
})
export class InternationalExperiencesComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }
}
