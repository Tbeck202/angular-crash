import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // This is the task "property". A "property" is used to define what an object should look like. (in this case, a task)
  // This property will be used to render each task object in the html using text interpolation {{ }}
  // "tasks" will be the property name, called in the html. 
  // Task[] is the interface and type declaration ("Task" = interface and "[]" = type, which is an array in this case)
  tasks: Task[] = [];

  // The argument in the constructor method is called a "provider"
  // This one is set to "private", meaning we'll only use the service from this component (I think, still a little unclear)
  // We name it taskService on the left of the ":" and define it as TaskService on the right (matches the import up top)
  constructor(private taskService: TaskService) { }

  // ngOnInit() runs on page load, or on load of the component. "void" of course means the method doesn't return anything
  ngOnInit(): void {
    // breaking this down from left to right:
    // "this" means we run the method on whatever it was that called it
    // taskService is what we named the service in the constructor
    // getTasks() is the name of the method we defined in task.service.ts
    // .subscribe() means we want to watch this function and wait for the promise to resolve
    // "(tasks)" is the return value from the observable (I think)
    // "(this.tasks..." is the tasks property defined in the onInit method up above
    // "...tasks)" is the return value from the observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // This is the function that was emitted from task-item.components.ts
  // The click event --> (onDeleteTask)="deleteTask()" <-- lives on the "app-task-item" declaration in task.comonenet.html 
  // (task.component is the PARENT compnent of task-item.component)
  deleteTask(task: Task) {
    // Now we call the service method in task.service.ts
    // taskService.deleteTask is an observable so we need to subscribe to it
    // then inside the subscribe function, we do the thing that we want to do (in this case filter)
    this.taskService.deleteTask(task).subscribe(() => 
      this.tasks = this.tasks.filter(t => 
        t.id !== task.id))
    // console.log(`Delete: ${task.text}`);
    
  }

  // Since we're using [ngClass] on div.task in task-item.component.html
  // all wee need to do is update the value of task.reminder betwwen trye/false
  // the [ngClass] directive will handle the class toggling
  // Then we call the setReminder() method in task.service.ts
  setReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.setReminder(task).subscribe()
  }

}
