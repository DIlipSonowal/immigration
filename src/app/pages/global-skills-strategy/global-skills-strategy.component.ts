import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-global-skills-strategy',
  templateUrl: './global-skills-strategy.component.html',
  styleUrls: ['./global-skills-strategy.component.scss']
})
export class GlobalSkillsStrategyComponent implements OnInit {

  constructor(private cs:CommonService) {}
  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>{
      this.cs.contentReady.next(true);
    }, 500);
  }
}
