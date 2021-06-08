import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoItems: Array<string> =[];
  todo :string;

  constructor() { }

  ngOnInit() {
  }

  Addtodo(item:string){
    this.todoItems.push(item);
    this.todo="";
  }

  DeleteItem(item:string){
    
    this.todoItems = this.todoItems.filter( x=> x!=item)
  }
  SubmitTodo(){

  }


}