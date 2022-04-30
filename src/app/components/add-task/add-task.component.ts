import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  /* 
  The properties listed here, map to the inputs in the form in add-task.component.html
  Remember to import FormsModule in app.module.ts to work with forms 
  Remember to import "Output" and "EventEmitter" up top
  */
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter; 
  text: string;
  day: string;
  reminder: boolean = false; // Reminder is set to false by default
  showAddTaskForm: boolean;
  subscription: Subscription;

  /* Here, we're using the onToggle() method defined in ui.service.ts */
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTaskForm = value))
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please fill out your task.')
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    /* This emitter is a little different than the others we have set up for this app,
    in that those others are declared inside of their own functions and then called with a click event on a button. 
    This emittter lives inside of onSubmit and will be called when the form is submitted (by clicking the button in the form).
    Therefore, we just declare it like this. */
    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
