import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCountryComponent } from './main-country/main-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { AddCountryComponent } from './add-country/add-country.component';

const routes: Routes = [
  {
    path: '',
    component: MainCountryComponent,
    children:[
      {
        path: 'list',
       component: ListCountryComponent,
      },
      {
        path: 'add',
       component: AddCountryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
