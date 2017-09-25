import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'ng2-materialize';

//containers
import { UserComponent } from './container/user/user.component';
import { UserModule } from './container/user/user.module';
import { TodoContainerComponent } from './container/todo-container/todo-container.component';
import { TodoContainerModule } from './container/todo-container/todo-container.module';

import { RouterModule,Routes}  from '@angular/router';

const rotasPrincipas:Routes = [
	{path:'',component:UserComponent},
  {path:'usuario/:id',component:TodoContainerComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	UserModule,
    TodoContainerModule,
    BrowserModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(rotasPrincipas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
