import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodolistComponent } from './containers/todolist/todolist.component';
import { TodoComponent } from './containers/todo/todo.component';

const routes: Routes = [
  { path: 'todolist', component: TodolistComponent },
  { path: 'todo/:id', component: TodoComponent },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
