import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './componentes/container/container.component';
import { RouterModule } from '@angular/router';
import { AppRouter } from './app.routing';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { TodosComponent } from './componentes/todos/todos.component';
import { FormularioComponent } from './componentes/todos/formulario/formulario.component';
import { BaseService } from './servicos/base-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ContainerComponent,
    PerfilComponent,
    TodosComponent,
    FormularioComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRouter,
    HttpModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
