import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // These @Input()'s will allow you to set the "text" and "color" properties on the component selector like this:
  //          <app-button color="green" text="Add" (btnClick)="toggleAddTask()"></app-button>
  // This allows you to reuse the button component and customize those properties.
  // You need to import "Input" in the component (up top) to use them
  @Input() text: string;
  @Input() color: string;

  // This is the event emitter for your button. (Import EventEmitter)
  // It lets you define what happens on click in the component that uses the button and makes the button reusable.
  // You define the custom method down below. In this case, onClick()
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  // This is the method called when the button is clicked. 
  // Tie it to the button in button.component.html with this:
  // (click)="onClick()"
  onClick() {
    // this.btnClick.emit(); will emit the click so that you can define what happens on click inside of the component that uses the button.
    // If you define the logic here, like lets say console.log('You clicked me!'), then this is all the button will ever do.
    // But with emit(), you can define new logic/action for each instance (inside of the component.ts that uses the button).
    // You call the method on the component declaration in the .html file like this: (btnClick)="someCustomMethod()"
    // "someCustomMethod()" will be defined in whatever component.ts is using the button (example: toggleAddTask() in header.component.ts)
    // "btnClick" is what we named the Emitter up above
    // emit() is the built in method from Angular that comes with the EventEmitter import
    this.btnClick.emit();
  }

}
