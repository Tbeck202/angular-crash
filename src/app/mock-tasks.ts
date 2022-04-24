
// Import the Task interface
import {Task} from './Task'

// Declare the Task interface with Task[] (this is a typescript thing)
// Now, TASKS must be ann array, and each Task in the array must match the Task interface 
export const TASKS: Task[] = [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'May 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'May 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'May 7th at 12:30pm',
      reminder: false,
    },
  ];