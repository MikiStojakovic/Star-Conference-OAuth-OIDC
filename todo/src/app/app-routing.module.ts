import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from "app/todo/todo.component";
import { AboutComponent } from "app/about/about.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
