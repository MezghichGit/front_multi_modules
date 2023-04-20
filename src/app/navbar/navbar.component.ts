import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  title = 'Application REAN pour la gestion des Coutries/Equipes';
  //nomUser = sessionStorage.getItem("name");
  public constructor(public loginService: AuthenticationService) {

  }
  ngOnInit(): void {
      {
        //this.nomUser = sessionStorage.getItem("name");

      }
  }
  /*ngOnChanges(): void {
    this.nomUser = sessionStorage.getItem("name");
  }*/

}
