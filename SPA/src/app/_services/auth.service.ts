import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
    decodedToken: any;
    jwtHelper = new JwtHelperService();
    baseUrl = environment.apiUrl + 'auth/';
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
    return this.http.post(this.baseUrl + 'login' , model);
  }
loggedIn(){
    // const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
}
}
