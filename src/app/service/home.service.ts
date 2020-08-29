import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators';
let endpoint = "http://localhost:8000";

@Injectable({
  'providedIn': 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  ngOnInit(){

  }
  
  topSlider(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //         'Content-Type': `application/json`,
  //     }),
  // };
      return this.http.get(`${endpoint}/home/top-slider`)
      .pipe(map(res=>{
        return res;
      }));
  }

  goalSlider(){
      return this.http.get(`${endpoint}/home/our-goals`)
      .pipe(map(res=>{
        return res;
      }));
  }

  homeAbout() {
    return this.http.get(`${endpoint}/home/about`)
    .pipe(map(res=>{
      return res;
    }));
  }

  whychooseus() {
    return this.http.get(`${endpoint}/home/whychooseus`)
    .pipe(map(res =>{
      return res;
    }));
  }

  immigrationService() {
    return this.http.get(`${endpoint}/home/immigration_service`)
    .pipe(map(res => {
      return res;
    }));
  }
}
