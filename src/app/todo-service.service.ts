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
    return this._httpClient.get<ITodo[]>("https://localhost:7112/api/TodoQuery");
  }

  public postTodos(data:any):any{
    return this._httpClient.post("https://localhost:7058/api/Todo",data);
  }

  public putTodos(data:any):any{
    return this._httpClient.put(`https://localhost:7058/api/Todo`,data);
  }

  public deleteTodos(data:any):any{
    return this._httpClient.delete(`https://localhost:7058/api/Todo?Id=${data.todoId}`,data);
  }

  public login(data:any):any{
    return this._httpClient.post(`https://localhost:7112/api/UserLogin`,data);
  }
}
