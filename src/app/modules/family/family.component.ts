import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit, AfterViewInit {
  localContentReady = false;
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.contentReady.next(false);
    setTimeout(()=>this.handleLoader(), 500);
  }

  ngAfterViewInit(){ 
    setTimeout(()=>this.handleLoader(), 500);
  }
   
  handleLoader(){
    this.localContentReady = false;
    this.cs.contentReady.subscribe(d =>{
      this.localContentReady = d;
      if(this.localContentReady){
          document.getElementById('loaderArea').classList.add('conditionClass');
          document.getElementById('loaderArea').classList.remove('loading');
      } else{
        document.getElementById('loaderArea').classList.remove('conditionClass');
        document.getElementById('loaderArea').classList.add('loading');
      }
    });
  }
}
