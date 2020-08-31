import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../service/common.service';
import { HomeService } from '../../../service/home.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutv9 = { header:'', text_content:'', lists:[{list:''}], img:''};
  public list1 = [{list:''}];
  public list2 = [{list:''}];
  public ourmission = {
    header:'',
    text_content:'',
    img:''
  };
  public ourvission = {
    header:'',
    text_content:'',
    img:''
  };
  public ourValues = {
    header:'',
    sub_header:'',
    text_content: {
      commitment:{title1:'', description:''},
      innovation:{title1:'', description:''},
      integrity:{title1:'', description:''},
      ownership:{title1:'', description:''},
      passion:{title1:'', description:''},
      perserverance:{title1:'', description:''},
      teamwork:{title1:'', description:''},
      transparency:{title1:'', description:''},
    }
  };

  public ceo = {
    header: '',
    name: '',
    sub_title:'',
    text_content:'',
    img:''
  }
  constructor(private cs:CommonService, public router: Router, private hs:HomeService) {}
  
  ngOnInit(): void {
    //console.log('//',this.router.url);
    this.cs.contentReady.next(false);
    console.log('');
    setTimeout(()=> {
      this.cs.contentReady.next(true);
    }, 200);

    this.hs.getAboutv9About().subscribe( (res:any) => {
      this.aboutv9 = res;
      const c = Math.ceil(res.lists.length/2);
      console.log(res.lists, c);
      this.list1 = res.lists.slice(0,c);
      this.list2 = res.lists.slice(c);
    });

    this.hs.ourMission().subscribe( (res:any)=>{
      this.ourmission = res;
    });

    this.hs.ourVission().subscribe( (res:any)=>{
      this.ourvission = res;
    });

    this.hs.ourvalues().subscribe((res:any)=>{
      this.ourValues = res;
    });

    this.hs.aboutCeo().subscribe( (res:any)=> {
      this.ceo = res;
    });
  }
}

