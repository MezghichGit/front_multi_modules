import { Component , OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  name:any
  invalidLogin = false;

  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(
      (data:any) =>{
           console.log(data)
          let token = data['token'];
          sessionStorage.setItem("token",token);
          data = jwt_decode(token);
          this.name = data["name"];
          sessionStorage.setItem("name",this.name);

        this.invalidLogin = false;
        this.router.navigate([""])
      }
        ,
      error=>{
        this.invalidLogin = true;
      }
    );

    /*
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true*/
  }
}
