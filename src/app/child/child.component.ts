import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Input()
  channelName = '';

  @Output()
  sendMessageEmitter = new EventEmitter()

  sendMessageToParent(e){
    this.sendMessageEmitter.emit(e.target.value);
    
  }
}
