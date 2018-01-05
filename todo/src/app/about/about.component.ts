import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import {Headers} from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  todos: TodoItem[] = [];
  activeTodo: TodoItem = new TodoItem();
  resourceUrl = "http://localhost:5001/api/todo";
  id_token = '';
  access_token = '';
  headers: Headers = new Headers();

  constructor(private http: Http, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadTodos()
  }

  loadTodos(){
    //this.http.get(this.baseUrl + "/todos")
      //this.http.get(this.authorityUrl)

      this.route.fragment.subscribe((fragment: string) => {
        console.log("My hash fragment is here => ", fragment)
        
        var id = String(fragment).substr(
                    String(fragment).indexOf("=") + 1, 
                    String(fragment).indexOf("&") - 1 - String(fragment).indexOf("=")) 

        console.log("Id token is here =>", String(fragment).indexOf("="))
        console.log("Id token is here =>", String(fragment).indexOf("&") - String(fragment).indexOf("=") + 1)
        console.log("Id token is here =>", id)

        fragment = String(fragment).substr(String(fragment).indexOf("&") + 1)
        
        var access = String(fragment).substr(
        String(fragment).indexOf("=") + 1, 
        String(fragment).indexOf("&") - 1 - String(fragment).indexOf("="))             

        console.log("Access token is here =>", access)  

        this.createAuthorizationHeader(access);
        this.callResource();  
        })
  }

  createAuthorizationHeader(accessToken: string) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' +
      accessToken); 

      console.log("this.headers is here =>", this.headers)  
  }

  callResource(){
    console.log("this.callResource")
    this.http.get(this.resourceUrl, { headers: this.headers })
    .subscribe(todosResponse =>{
      this.todos = todosResponse.json();
      console.log('resource server responded ');
      console.log(this.todos);
    },
  (er => {
    console.log('resource server error ' + er);
  }) )
  }

  toggleCompleted(todo){
    todo.completed = !todo.completed;
  }

  removeTodo(todo){
    this.todos = this.todos.filter( td => td !== todo )
  }

  saveTodo(todo){
    this.todos.unshift(todo);
  }
}

export class TodoItem {
  title: string;
  description: string;
  completed: boolean;
  entered: Date = new Date();
}
