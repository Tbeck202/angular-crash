import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  /* These are properties used to show/hide the add task form */
  private showAddTaskForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  /* This method is called when we click the "Add/Close" button in the header */
  toggleAddTaskForm(): void {
    this.showAddTaskForm = !this.showAddTaskForm;
    this.subject.next(this.showAddTaskForm)
  }

  /* This method is called from the constructor in header.component.ts.
      It simply returns whatever the current value of "showAddTaskForm" is
      because when we click the "Add/Close" button in the header, we call "toggleAddTask()" from the header component,
      which calls "toggleAddTaskForm" in this component, which flips the value of the "showAddTaskForm" boolean
      and is then passed into the "subject" Subject with the Subject.next() method.
      The Subject.next() method is used to send messages to an observable which are then sent to 
      all angular components that are subscribers (a.k.a. observers) of that observable. 
      So, since we're passing in the value of "showAddTaskForm" into next(), 
      that value gets passed to the observable that we then subscribe to in header.component.ts (in the constructor) */
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
