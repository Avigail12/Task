import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  logg = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe((x: any) => {
      if ( x != null ){
        this.logg = true;
      }
    });
  }
  loggedIn(){
    return this.logg;
  }
  logout(){

  }
}
