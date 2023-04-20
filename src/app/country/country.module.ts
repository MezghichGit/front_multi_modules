import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';
import { MainCountryComponent } from './main-country/main-country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';

@NgModule({
  declarations: [
        MainCountryComponent,
        AddCountryComponent,
        ListCountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
  ]
})
export class CountryModule { }
