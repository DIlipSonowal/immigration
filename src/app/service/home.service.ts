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

  howitworks() {
    return this.http.get(`${endpoint}/home/how_itworks`)
    .pipe(map(res=>{
      return res;
    }));
  }

  feedBack() {
    return this.http.get(`${endpoint}/home/feedback`)
    .pipe(map(res=>{
      return res;
    }));
  }

  getTeams() {
    return this.http.get(`${endpoint}/home/teams_photo`)
    .pipe(map(res=>{
      return res;
    }));
  }

  getAboutv9About() {
    return this.http.get(`${endpoint}/home/aboutV9immigration`)
    .pipe(map(res=>{
      return res;
    }));
  }

  ourMission() {
    return this.http.get(`${endpoint}/home/about_mission`)
    .pipe(map(res=>{
      return res;
    }));
  }

  ourVission() {
    return this.http.get(`${endpoint}/home/our_vission`)
    .pipe(map(res=>{
      return res;
    }));
  }

  ourvalues() {
    return this.http.get(`${endpoint}/home/our_values`)
    .pipe(map(res=>{
      return res;
    }));
  }

  aboutCeo() {
    return this.http.get(`${endpoint}/home/about_ceo`)
    .pipe(map(res=>{
      return res;
    }));
  }
}
