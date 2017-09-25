import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from '../../servicos/base-service.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private _base:BaseService) { }

  ngOnInit() {
  }

}
