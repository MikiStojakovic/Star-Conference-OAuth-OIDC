import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from "app/todo/todo.component";
import { AboutComponent } from "app/about/about.component";
import { AgendaComponent } from 'app/agenda/agenda.component';
import { LoginComponent } from 'app/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
