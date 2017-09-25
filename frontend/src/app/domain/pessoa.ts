import { Todo } from "./todo";

export class Pessoa {
    public _id:string
    public nome:string
    public idade:number
    public todos:Array<Todo>
}