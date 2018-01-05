import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import {Headers} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authorityUrl="http://localhost:5000/connect/authorize?response_type=id_token%20token" +
  "&client_id=spa"+
  "&redirect_uri=http%3A%2F%2Flocalhost:5002/agenda" +
  "&scope=openid%20profile%20agenda" +
  "&nonce=n-0S6_WzA2Mj";

  constructor(private http: Http, 
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.loadTodos()   
  }

  loadTodos(){
    window.location.href = this.authorityUrl;
  }

}
