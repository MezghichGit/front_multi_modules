import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main-equipe',
  templateUrl: './main-equipe.component.html',
  styleUrls: ['./main-equipe.component.css']
})
export class MainEquipeComponent implements OnInit{
  nomUser:any;
  constructor(){}
  ngOnInit(): void {
    this.nomUser = sessionStorage.getItem("name");
  }
}
