import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
	private _url:string = "http://localhost:3030/usuarios"
  constructor() { }

}
