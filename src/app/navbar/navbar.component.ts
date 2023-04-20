import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Application REAN pour la gestion des Coutries/Equipes';
  nomUser :any;
  public constructor(public loginService: AuthenticationService) {
    this.nomUser = sessionStorage.getItem("name");

  }
}
