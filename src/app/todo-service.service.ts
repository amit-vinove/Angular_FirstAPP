import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITodo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private _httpClient:HttpClient) { }

  public getTodos():Observable<ITodo[]>{
    return this._httpClient.get<ITodo[]>("http://localhost:5032/api/Todo");
  }

  public postTodos(data:any):any{
    return this._httpClient.post("http://localhost:5032/api/Todo/AddTodo",data);
  }

  public putTodos(data:any):any{
    return this._httpClient.put(`http://localhost:5032/api/Todo/CheckTodo/?checkTodo=${data.checked}&todoId=${data.todoId}`,data);
  }

  public deleteTodos(data:any):any{
    return this._httpClient.delete(`http://localhost:5032/api/Todo/DeleteTodo?todoId=${data.todoId}`,data);
  }
}
