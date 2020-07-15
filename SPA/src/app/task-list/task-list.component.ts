import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 user: any;
 tasks: any;
 logg = false;
 taskById: any;
  constructor(private taskService: TaskService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  // this.logg = this.authService.logg;
  this.getTasks();
  // this.getTaskById();
  // console.log(this.authService.user);
  this.logg = this.authService.logg;
  }
  
  getTasks(){
    this.taskService.getTasks().subscribe((tasks: any) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }
  // getTaskById(){
  //   this.taskService.getTaskById(this.authService.id).subscribe((task: any) => {
  //     this.taskById = task;
  //   });
  //   console.log(this.taskById);
  // }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(() => {
      console.log('deleted suuccess');
    }, error => {
      console.log('error deleted task');
    });
  }

  updateTask(id: number){
    this.router.navigate(['/updateTask', id]);
  }
  
}
