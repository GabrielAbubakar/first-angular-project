import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { title } from 'process';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true })  name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title : 'Task 1',
      summary: 'This is the first task',
      dueDate: '2023-10-01',
    },
    {
      id: 't2',
      userId: 'u3',
      title : 'Task 1',
      summary: 'This is the first task',
      dueDate: '2023-10-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title : 'Task 1',
      summary: 'This is the first task',
      dueDate: '2023-10-01',
    },
  ]

  // Computed Property
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
