import { Component,OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit{

  countries:any;
  constructor(private countryService:CountryService){}

  ngOnInit(){
    //this.countries = this.countryService.getCountries();
    this.countryService.getAllCountries().subscribe(
      data =>{
        this.countries = data
      }
    );
  }
}
