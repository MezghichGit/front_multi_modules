import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { MainEquipeComponent } from './main-equipe/main-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';


@NgModule({
  declarations: [
    MainEquipeComponent,
    AddEquipeComponent,
    ListEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
