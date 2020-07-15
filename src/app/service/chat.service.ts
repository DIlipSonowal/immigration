import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string, public tm:string, public id: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  dyid: number = 1;
  constructor() { }
  conversation = new Subject<Message[]>();
  
  messageMap = {
    "hi": "Hello",
    "who are you": "I am V9 Immigration Bot",
    "default": "I can't understand. Can you please repeat"
  }

  getBotAnswer(msg: string) {
    var currentdate = new Date(); 
    var datetime = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
       
    const userMessage = new Message('user', msg, datetime, `myid${this.dyid}`);  
    this.conversation.next([userMessage]);
    
    setTimeout(()=>{
      var datetime1 = currentdate.getHours() + ":"  
      this.dyid = this.dyid + 1;
      + currentdate.getMinutes() + ":" 
      + currentdate.getSeconds();    
      const botMessage = new Message('bot', this.getBotMessage(msg),datetime1, `myid${this.dyid}`);
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    question = question.toLowerCase(); 
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}
