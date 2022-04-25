
// Here we are creating an angular "service"
// My understanding is that essentially, this is just a set of reusable methods
// So rather than defining methods specific to a single component, we create methods that can be used in multiple components
// Services are helpful when calling api's and whatnot
// The service is helpful because you can set up the api call and all the various functions in once place
// then you can simply call the service methods from whatever components you want/need
import { Injectable } from '@angular/core';
// We need the HttpClient module to make api calls. It replaces fetch() or axios or whatever
// Make sure to import/declare in app.module.ts
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable, of} from 'rxjs'
import { Task } from '../Task';

// These are the headers that we're passing in with our put/post requests
const httpOptions =  {
  // HttpHeaders is a module that we imported
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // This is the property we use to define the url we want to call
  // in this case, we're just using a local json file "db.json"
  private apiUrl = 'http://localhost:5000/tasks'

  // We need to pass the HttpClient into the constructor
  // "private" meaning we'll only use the service from this component (I think, still a little unclear)
  // "http" to the left of ":" is the name while "HttpClient" is the definiton
  // would then be used like "this.http" and then however from there. get, post, whatever
  constructor(private http: HttpClient) { }

  // here we've set the getTasks() method as an observable. (sort of like a function that returns a promise)
  // Declare the method to the left of the ":" and define it as an "Observable" to the right
  // <Task[]> is the "type" which we defined in the "Task" interface. 
  // We're working with a Task array so we need the array[] type declaration
  getTasks(): Observable<Task[]> {
    // "this" refers to whatever we've called the moethod on (in this app it would be a task)
    // .http is what we declared in the constructor
    // .get is the method we're using on http
    // We have to declare the type with "<Task[]>"
    // Then we pass in "this.apiUrl"
    return this.http.get<Task[]>(this.apiUrl)
  }

  // This is the delete method that we called from task.component 
  // Declare the method to the left of the ":" and define it as an "Observable" to the right
  // <Task> is the "type" which we defined in the "Task" interface. 
  // We're working with a single Task so we don't need the array[] type declaration
  deleteTask(task: Task): Observable<Task> {
    // In here we're making a delete request to the defined url with a specific id
    // We return the observable with all the task info to the component using this meathod (in this case, task.component.ts)
    // remember an observable is just like returning a promise
    const url = `${this.apiUrl}/${task.id}`
    
    return this.http.delete<Task>(url)
  }

  // Here we're updating the task object in the db
  setReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    
    return this.http.put<Task>(url, task, httpOptions)
  }


  /* *********************************************** */
  //  EVERYTHING IS HERE IS JUST FOR DEMONSTARTION, DOCUMENTATION
  // WE REPLACED ALL OF THIS ONCE WE ADDED "json-server"
  // HERE ARE THE import'S THAT WE NO LONGER NEED
  // import { of} from 'rxjs'
  // import { TASKS } from '../mock-tasks';

        // here we've set the getTasks() method as an observable. (sort of like a function that returns a promise)
        // Declare teh method to the left of the ":" and define it as an "Observable" to the right
        // <Task[]> is the "type" which we defined in the "Task" interface
  // getTasks(): Observable<Task[]> {
          // we made a variable called "tasks" that is made up "of()" "TASKS"
          // "TASKS" is defined as an array in mock-tasks so the "tasks" variable here will be an array
          // which of course matches the type declared in the method
  //   const tasks = of (TASKS);
  //   return tasks
  // }
  /* *********************************************** */
}
