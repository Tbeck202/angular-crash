import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
  }

  // This is the custom method for the btnClick emitter defined in button.component.ts
  // you define it on the button componenent declaration in the html file like this:
  // <app-button (btnClick)="toggleAddTask()"></app-button>
  // (btnClick) is saying: use the "click" event defined in button.component.ts
  // toggleAddTask() is saying: upon "click" run the logic defined below in the toggleAddTask() method
  toggleAddTask() {
    console.log('Toggle!');
  }

}
