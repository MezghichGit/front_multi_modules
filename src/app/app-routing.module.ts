import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
