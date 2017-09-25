import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../servicos/base-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private _base:BaseService,private active:ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(parametro=>{
      this._base.obterPessoa(parametro['id'])
        .subscribe(pessoa=>{
          console.log(pessoa);
          this._base.pessoa = pessoa;
        })
    })
  }

}
