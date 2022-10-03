import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public items:any = [];
  
  public newTask:any="";

  
  public addToList() {
      if (this.newTask == '') {
      }
      else {
          this.items.push(this.newTask);
          this.newTask = '';
      }
      console.log(this.items);
  }
  public deleteTask(index:number) {
      this.items.splice(index, 1);
  }

}
