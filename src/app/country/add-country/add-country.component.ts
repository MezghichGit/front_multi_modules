import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent {
  constructor(private countryService:CountryService,private router: Router){}
  handleAddCountry(countryForm:any) {
    let newCounty = {
      'id':102,
      'country':countryForm.value.wording
  }
   // this.countryService.addCountry(newCounty);
   this.countryService.addCountry(newCounty).subscribe(
    data=>{
      console.log("Inserted..."+ data)
      this.router.navigate(['/country/list']);
    }
   );

  }
}
