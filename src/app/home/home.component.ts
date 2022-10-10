import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { Observable, Subscription } from 'rxjs';
import { TodoServiceService } from '../todo-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _todoService: TodoServiceService,private router: Router) {}

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
        userId: 1,
        checked: false,
      };
      this._todoService.postTodos(data).subscribe((res: any) => {
        this.todosDb.push(res.data);
        this.newTask = '';
      });
    }
  }

  public editTodo(todo: any) {
    var data;
    if (todo.checked === false) {
      data = {
        todoId: todo.todoId,
        todoName: todo.todoName,
        userId: todo.userId,
        checked: true,
      };
    }
    if (todo.checked === true) {
      data = {
        todoId: todo.todoId,
        todoName: todo.todoName,
        userId: todo.userId,
        checked: false,
      };
    }
    this._todoService.putTodos(data).subscribe(
      (res: any) => {
        if (res.responseCode == 200) {
          this._todoService
            .getTodos()
            .subscribe((data) => (this.todosDb = data));
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


  public deleteTodo(todo: any) {
    Swal.fire({
      title: 'Do you want to Delete this todo ?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor:'#dc3545'
    }).then((result) => {
      if (result.isConfirmed) {
        this._todoService.deleteTodos(todo).subscribe(
          (res: any) => {
            if (res.responseCode == 200) {
              let filtered = this.todosDb.filter(
                (item) => item.todoId !== todo.todoId
              );
              this.todosDb = filtered;
            }
          },
          (err: any) => {
            return console.log(err);
          }
        );
        Swal.fire('Deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  public logout() {
    this.router.navigate(['/']);
  }
}
