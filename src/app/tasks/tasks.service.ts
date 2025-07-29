import { Injectable } from "@angular/core";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks: Task[] = [
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
      ];
    
    constructor() {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }
    
    addTask(taskData: NewTaskData, userId: string): void {
        this.tasks.push({
        id: Math.random().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
     });
        this.saveTasks();
    }
    
    getUserTasks(userId: string): Task[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    clearTasks(): void {
        this.tasks = [];
    }
}