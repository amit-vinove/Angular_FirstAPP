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
}
