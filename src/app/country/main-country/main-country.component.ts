import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main-country',
  templateUrl: './main-country.component.html',
  styleUrls: ['./main-country.component.css']
})
export class MainCountryComponent implements OnInit{
  nomUser:any;
  constructor(){}
  ngOnInit(): void {
    this.nomUser = sessionStorage.getItem("name");
  }

}
