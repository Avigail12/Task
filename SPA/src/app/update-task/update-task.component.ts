import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id: number;
  model: any = {};
  task: any;
  constructor(private activ: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.id = this.activ.snapshot.params['id'];
    console.log(this.id);
    this.getTask();
  }

  getTask(){
    this.taskService.getTaskById(this.id).subscribe((task: any) => {
      this.task = task;
      console.log(task);
    });
  }

  updateTask(){
    this.model.id = this.id;
    this.taskService.updateTask(this.model).subscribe(() => {
      console.log('success');
    }, error => {
      console.log('error updating');
    });
  }

}
