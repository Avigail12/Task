import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  logg = false;
  tasks: any;
  constructor(public authService: AuthService, private router: Router,private taskServices: TaskService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe((x: any) => {
      if ( x != null ){
        console.log(x);
        this.taskServices.getTaskById(this.authService.id).subscribe((tasks: any) => {
          this.tasks = tasks;
        });
        console.log(this.tasks);
      }
    },err => {
      console.log('error');
    },() => {
      this.router.navigate(['/tasks']);
  });
  }
  loggedIn(){
    // if (localStorage.getItem('user') != null){
    //   this.logg = true;
    //   return this.logg;
    // }
    // else {
    //   this.logg = false;
    //   return this.logg;
    // }

    return localStorage.getItem('user') != null;
  }
  logout(){

  }
}
