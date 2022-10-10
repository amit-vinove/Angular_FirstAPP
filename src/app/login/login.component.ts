import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _todoService: TodoServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  public username: any = '';
  public password: any = '';

  public login() {
    if (this.username == '' || this.password == '') {
      alert('Please enter username and password');
    } else {
      let data = {
        userName: this.username,
        password: this.password,
        userId:0,
      }
      this._todoService.login(data).subscribe((res: any) => {
        if (res.responseCode == 200) {
          this.router.navigate(['/home']);
        }
      },
      (err:any)=>{
        alert(err.error.message);
      }
      );
    }
  }



}
