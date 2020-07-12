import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  logg = false;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe((x: any) => {
      if ( x != null ){
        this.logg = true;
        localStorage.setItem('user', x);
        console.log(x);
      }
    },err => {
      console.log('error');
    },() => {
      this.router.navigate(['/tasks']);
  });
  }
  loggedIn(){
    return this.logg;
  }
  logout(){

  }
}
