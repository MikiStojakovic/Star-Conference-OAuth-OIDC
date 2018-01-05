import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import {Headers} from '@angular/http';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: AgendaItem[] = [];
  activeAgenda: AgendaItem = new AgendaItem();
  resourceUrl = "http://localhost:5001/api/agenda";
  id_token = '';
  access_token = '';
  headers: Headers = new Headers();

  constructor(private http: Http, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadAgenda()
  }

  loadAgenda(){
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
        .subscribe(agendaResponse =>{
          this.agenda = agendaResponse.json();
          console.log('resource server responded ');
          console.log(this.agenda);
        },
      (er => {
        console.log('resource server error ' + er);
      }) )
  }

  toggleCompleted(agenda){
    agenda.completed = !agenda.completed;
  }

  removeAgenda(agenda){
    this.agenda = this.agenda.filter( ag => ag !== agenda )
  }

  saveAgenda(agenda){
    this.agenda.unshift(agenda);
  }
}

export class AgendaItem {
  title: string;
  description: string;
  completed: boolean;
  entered: Date = new Date();
}
