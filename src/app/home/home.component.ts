import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import {Observable,Subscription} from 'rxjs';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _todoService : TodoServiceService) { }

  public todosDb:ITodo[] = [];
  ngOnInit(): void {
    this._todoService.getTodos().subscribe(data=>this.todosDb=data);
  }
  
  public items:any = [];
   
  public newTask:any="";

  
  public addToList() {
      if (this.newTask == '') {
      }
      else {
          let data = {todoId:0,todoName:this.newTask,userId:2,checked:false,username:'Amitk6228'};
          this._todoService.postTodos(data).subscribe((res:any)=>{
          // if(res.status == 200){
            this.todosDb.push(res);
            this.newTask = '';
            console.log(this.todosDb)
          // }
        }
          );
      }
  }
  public deleteTask(index:number) {
      this.items.splice(index, 1);
  }

}
