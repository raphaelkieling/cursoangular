import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginModule } from '../../componentes/usuario/login/login.module';
import { CadastrarModule } from '../../componentes/usuario/cadastrar/cadastrar.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    CadastrarModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
