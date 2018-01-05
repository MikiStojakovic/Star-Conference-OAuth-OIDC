import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import {Headers} from '@angular/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoItem[] = [];
  // [
  //   	{
  //   		title: 'PADNUG Angular Presentation',
  //   		description: 'Try to show up on time',
  //   		completed: false
  //   	},
  //   	{
  //   		title: 'Do Angular Presentation',
  //   		description: 'Should go good, let\'s hope I don\'t fail...',
  //   		completed: false
  //   	},
  //   		title: 'Go Home Happy',
  //   		description: 'Job done. Ready to go back',
  //   		completed: true
  //   	},
  //   	{
  //   		title: 'Drive back to Hood River',
  //   		description: 'Try to not fall asleep on the way back.',
  //   		completed: false
  //   	}
  // ];
 

  authorityUrl="http://localhost:5000/connect/authorize?response_type=id_token%20token" +
  "&client_id=spa"+
  "&redirect_uri=http%3A%2F%2Flocalhost:5002/about" +
  "&scope=openid%20profile%20todo" +
  "&nonce=n-0S6_WzA2Mj";  

  constructor(private http: Http, 
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.loadTodos()
  }  

  loadTodos(){
    window.location.href = this.authorityUrl;
    // this.http.get(this.authorityUrl)
    //   .subscribe( response => {
        // this.route.fragment.subscribe((fragment: string) => {
        //   console.log("My hash fragment is here => ", fragment)
          
        //   var id = String(fragment).substr(
        //               String(fragment).indexOf("=") + 1, 
        //               String(fragment).indexOf("&") - 1 - String(fragment).indexOf("=")) 

          // console.log("Id token is here =>", String(fragment).indexOf("="))
          // console.log("Id token is here =>", String(fragment).indexOf("&") - String(fragment).indexOf("=") + 1)
          // console.log("Id token is here =>", id)

          // fragment = String(fragment).substr(String(fragment).indexOf("&") + 1)

          // var access = String(fragment).substr(
          //   String(fragment).indexOf("=") + 1, 
          //   String(fragment).indexOf("&") - 1 - String(fragment).indexOf("="))             

          //   console.log("Access token is here =>", access)
            // this.createAuthorizationHeader(access);
            // //this.callResource();
        // })               
      //})
  }

  // toggleCompleted(todo){
  //   todo.completed = !todo.completed;
  // }

  // removeTodo(todo){
  //   this.todos = this.todos.filter( td => td !== todo )
  // }

  // saveTodo(todo){
  //   this.todos.unshift(todo);
  // }
}

export class TodoItem {
  title: string;
  description: string;
  completed: boolean;
  entered: Date = new Date();
}
