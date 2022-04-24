import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

// we import a specific icon from "fortawesome" which is defined and declared in "app.module.ts"
// In this case, faTimes is an "X"
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // With @Input, we're saying to use the Task interface for each task
  // So, each task must have all the attrs defined in the Task interface
  @Input() task: Task;

  // This here is an event emitter. We declare it as an @output emitter
  // We name it onDeleteTask, as an EventEmitter with a "type" of <Task>
  // We declare it as a "new" EventEmitter()
  // All of this is just the setup to then use the emitter in a function."onDelete()" in this case
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  // Set the icon we imported as a proprty of the TaskItemComponent class
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // This is the function that we're emitting to the "app-task-item" declaration in the parent component: task.comonenet.html
  // It's saying to task.comonenet.html "Hey! A thing was clicked. Now Please do whatever you're supposed to do when something is clicked"
  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

}
