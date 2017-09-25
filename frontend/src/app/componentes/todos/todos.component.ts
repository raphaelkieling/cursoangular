import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from '../../servicos/base-service.service';
import { Todo } from '../../domain/todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private _base:BaseService) { }

  ngOnInit() {
  }

  ngOnChanges(){
      
  }

  modificarTodo(idTodo,checkbox){
      var todos = this._base.pessoa['todos'].map((x:Todo)=>{
        if(idTodo === x['_id']){
          x.confirmado = checkbox.target.checked
          return x
        }else{
          return x
        }
      })
    this._base.modificarTodo(todos).subscribe(res=>{
      if(res.status==200)
        this._base.pessoa['todos'] = todos
      else
        console.log('deu erro')
    },err=>{
      console.log('deu erro 500')
    })
  }

}
