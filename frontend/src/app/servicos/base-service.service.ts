import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Pessoa } from '../domain/pessoa';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../domain/todo';

@Injectable()
export class BaseService{

  url:string = 'http://localhost:3020/api/v1/usuarios'
  pessoa:Pessoa;

  constructor(private _http:Http) { }

  //1
  cadastrarPessoa(pNome,pIdade):Observable<Pessoa>{
    return this._http.post(this.url,{
      nome:pNome,
      idade:pIdade
    }).map((resposta:any)=>resposta = JSON.parse(resposta._body))
  }

  //2
  obterPessoa(idPessoa):Observable<Pessoa>{
    return this._http.get(this.url+"/"+idPessoa)
      .map((resposta:any)=>resposta = JSON.parse(resposta._body));
  }

  //3
  adicionarTodo(pDescricao):Observable<Todo[]>{
    return this._http.put(this.url+"/addTodo",
      {
        _id:this.pessoa['_id'],
        todo:{descricao:pDescricao,confirmado:false},
      } 
    ).map((resposta:any)=>resposta = JSON.parse(resposta._body));
  }

  //4
  modificarTodo(pTodos){
    return this._http.post(this.url+"/modificaTodos",{
      _id:this.pessoa['_id'],
      todos:pTodos
    })
  }

  
}
