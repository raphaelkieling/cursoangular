import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { MaterializeModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [PerfilComponent],
  exports:[
    PerfilComponent
  ]
})
export class PerfilModule { }
