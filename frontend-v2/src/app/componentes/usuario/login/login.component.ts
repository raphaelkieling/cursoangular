import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }

  entrar(){
    this._router.navigate(['usuario','2']);
  }
}