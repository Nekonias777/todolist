import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectTodolist } from 'src/app/store/selectors/todolist.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { GetTodolist } from 'src/app/store/actions/todolist.actions';

@Component({
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todolist = this.store.pipe(select(selectTodolist));

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetTodolist());
  }

  navigateToTodo(id: number) {
    this.router.navigate(['todo', id]);
  }

}
