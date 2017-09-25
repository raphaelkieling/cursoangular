import {Routes,RouterModule} from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ContainerComponent } from './componentes/container/container.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const APP_ROUTES:Routes = [
    {path:'',component:AppComponent,children:[
        {path:'',redirectTo:'/cadastro',pathMatch:'full'},
        {path:'cadastro',component:CadastroComponent},
        {path:'todo/:id',component:ContainerComponent}
    ]},
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouter{}