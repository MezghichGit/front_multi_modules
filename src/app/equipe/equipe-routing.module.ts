import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEquipeComponent } from './main-equipe/main-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';

const routes: Routes = [{
  path: '',
  component: MainEquipeComponent,
  children:[
    {
      path: 'list',
     component: ListEquipeComponent,
    },
    {
      path: 'add',
     component: AddEquipeComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
