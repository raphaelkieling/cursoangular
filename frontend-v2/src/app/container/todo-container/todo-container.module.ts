import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container.component';
import { TodosModule } from '../../componentes/usuario/todos/todos.module';
import { PerfilModule } from '../../componentes/usuario/perfil/perfil.module';

@NgModule({
  imports: [
    CommonModule,
    TodosModule,
    PerfilModule
  ],
  declarations: [TodoContainerComponent]
})
export class TodoContainerModule { }
