import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service'; //this is the service we built to show/hide the add task form
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Task Tracker';
  /* This is the boolean property that controls the color and text of the 
      "Add/Close" app-button in the header.  */
  showAddTaskForm: boolean = false;
  /* This is the property we're using to subscribe to the toggleAddClass method defined below.
      We set this up in the constructor */
  subscription: Subscription;

  /* Remember to declare your subscription in the constructor
      "private" means we only use it in this method/component (I think)
      "uiService" is the name we assign it, "UiService" is the name of the import.
      We're also setting up teh use of Router */
  constructor(
    private uiService:UiService,
    private router:Router
    ) { 
    /* the logic here is subscribing to the "onToggle" method defined in ui.service.ts.
        "onToggle" is an observable so we subscribe and get the "value" from the observable.
        In this case, it's a boolean.
        Then we assign that "value" to the HeaderComponent Class property:"showAddTaskForm",
        which of course is used on the app-button to toggle between text/color values */
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTaskForm = value))
  }

  ngOnInit(): void {
  }

  // This is the custom method for the btnClick emitter defined in button.component.ts
  // you define it on the button componenent declaration in the html file like this:
  // <app-button (btnClick)="toggleAddTask()"></app-button>
  // (btnClick) is saying: use the "click" event defined in button.component.ts
  // toggleAddTask() is saying: upon "click" run the logic defined below in the toggleAddTask() method
  toggleAddTask() {
    /* Here, we're calling the "toggleAddTaskForm" method defined in "ui.service.ts" */
    this.uiService.toggleAddTaskForm()
  }

  /* We get the current route and tehn compare it to the route passed in from the fuction call in app-button. 
      In this case, we're passing in "/" so if the current route is the index route, the button will display.
  */
  hasRoute(route: string) {
    return this.router.url === route
  }

}
