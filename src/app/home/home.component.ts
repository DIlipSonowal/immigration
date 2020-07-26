import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  localContentReady = false;
  constructor(private cs:CommonService) { }
  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.localContentReady = true;
    // },500);
    this.cs.contentReady.next(false);
    setTimeout(()=>this.handleLoader(), 500);
  }

  ngAfterViewInit(){ 
    setTimeout(()=>this.handleLoader(), 500);
  }

  handleLoader(){
    this.localContentReady = false;
    this.cs.contentReady.subscribe(d =>{
      // console.log(d);
      this.localContentReady = d;
      if(this.localContentReady){
        // console.log('1');
          document.getElementById('loaderArea').classList.add('conditionClass');
          document.getElementById('loaderArea').classList.remove('loading');
      } else{
        // console.log('2');
        document.getElementById('loaderArea').classList.remove('conditionClass');
        document.getElementById('loaderArea').classList.add('loading');
      }
    });
  }

}
