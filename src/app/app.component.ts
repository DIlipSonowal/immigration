import { Component, OnChanges } from '@angular/core';
import { ChatbotComponent } from './chatbot/chatbot.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{
  title = 'immigration';
  open_chatbox(){
    document.getElementById("Sidenav_chatbox_id").style.width = "350px";
    // document.getElementById("chat_box_individual_id").innerHTML = `<iframe style="width:300px;bottom:3px;position:absolute;height:350px;border: 0px;" name="" src="http://localhost:4200/chatbot"></iframe>`;
  }

  close_chatbox() {
    document.getElementById("Sidenav_chatbox_id").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  ngOnChanges(prev) {console.log(`chat_box_individual_id`);
    document.getElementById('chat_box_individual_id').scrollIntoView(false);
  }  
}
