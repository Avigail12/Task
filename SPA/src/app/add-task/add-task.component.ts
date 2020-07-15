import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  model: any = {};
  task: any;
  user: User;
  constructor(private taskService: TaskService, private AuthService: AuthService) { }

  ngOnInit() {
  }

  addTask(){
    // this.model.userId = this.AuthService.id;
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user.id);
    this.model.userid = this.user.id;
    debugger;
    this.taskService.addTask(this.model).subscribe((task: any) => {
      this.task = task;
      console.log('suuccess');
      console.log(this.task);
    });
  }

}
