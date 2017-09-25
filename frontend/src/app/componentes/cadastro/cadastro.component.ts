import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BaseService } from '../../servicos/base-service.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome:string
  idade:number
  
  constructor(
    private _navigate:Router,
    private baseService:BaseService
  ) { }

  ngOnInit() {
  }

  submit(f){
    this.baseService.cadastrarPessoa(f.value.nome,f.value.idade)
      .subscribe(respostaDaApi=>{
        this.baseService.pessoa = respostaDaApi;
        this._navigate.navigate(['todo',respostaDaApi._id])
      },err=>{
        console.log('Deu algum erro');
      })
  }
}
