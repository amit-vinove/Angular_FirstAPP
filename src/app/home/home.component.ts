import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { Observable, Subscription } from 'rxjs';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _todoService: TodoServiceService) {}

  //Get Method
  public todosDb: ITodo[] = [];
  ngOnInit(): void {
    this._todoService.getTodos().subscribe((data) => (this.todosDb = data));
  }

  public items: any = [];

  public newTask: any = '';

  //Post Method
  public addToList() {
    if (this.newTask == '') {
    } else {
      let data = {
        todoId: 0,
        todoName: this.newTask,
        userId: 2,
        checked: false,
        username: 'Amitk6228',
      };
      this._todoService.postTodos(data).subscribe((res: any) => {
        // if(res.status == 200){
        this.todosDb.push(res);
        this.newTask = '';
        console.log(this.todosDb);
        // }
      });
    }
  }

  public editTodo(todo:any) {
    var data;
    if(todo.checked === false){
    data = {
      todoId: todo.todoId,
      checked: true,
    };
  }if(todo.checked === true){
    data = {
      todoId: todo.todoId,
      checked: false,
    };
  }
    this._todoService.putTodos(data).subscribe((res: any) => {
      this.todosDb = res.data;
    });
  }

  public deleteTodo(todo: any) {
    this._todoService.deleteTodos(todo).subscribe((res: any) => {
      if(res.responseCode == 200){
        let filtered = this.todosDb.filter((item) => item.todoId !== todo.todoId);
        this.todosDb = filtered;
      }
    });
  }
}
