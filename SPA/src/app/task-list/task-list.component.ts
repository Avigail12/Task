import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 user: any;
 tasks: any;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTaskById();
  }
  getTaskById(){
    
    this.user = localStorage.getItem('user');
    this.taskService.getTaskById(this.user.id).subscribe((tasks: any) => {
      this.tasks = tasks;
    });
  }
}
