import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable()
export class AuthService {
    decodedToken: any;
    jwtHelper = new JwtHelperService();
    baseUrl = environment.apiUrl + 'auth/';
    logg: boolean;
    user: User;
    id: number;
constructor(private http: HttpClient) { }

// login(model: any){
//     return this.http.post(this.baseUrl + 'login' , model)
//     .pipe(
//       map((response: any ) => {
//         const user = response;
//         if (user){
//          // localStorage.setItem('token', user.token);
//          // localStorage.setItem('user', JSON.stringify(user.user));
//          // this.decodedToken = this.jwtHelper.decodeToken(user.token);
//         }
//       })
//     );
//   }

  login(model: any){
    return this.http.post(this.baseUrl + 'login' , model).pipe(
      map((response: any ) => {
        const user = response;
        if (user){
          this.id = user.id;
          console.log(this.id);
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;
        }
      })
    );
  }
loggedIn(logg){
 
}
}
