import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css',
              './parent.component2.css'
            ]
})
export class ParentComponent {

  channelNameInParent="";
  msgFromChild="";

  receiveMessage(msg){
    this.msgFromChild = msg;    
  }


}
