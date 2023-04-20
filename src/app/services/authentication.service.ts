import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username:any, password:any) {
    let user={
      "email":username,
      "password":password
    }
     return this.http.post("http://127.0.0.1:83/token/sign",user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem("name");
  }

}
