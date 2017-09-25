import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../servicos/base-service.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private _base:BaseService) { }

  ngOnInit() {
  }

  adicionar(f){
    this._base.adicionarTodo(f.value.descricao)
      .subscribe((respostaDaApi)=>{
        this._base.pessoa.todos = respostaDaApi['todos']
        f.reset()
      })
  }

}
