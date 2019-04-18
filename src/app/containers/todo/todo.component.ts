import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectTodo } from 'src/app/store/selectors/todolist.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { GetTodo } from 'src/app/store/actions/todolist.actions';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo = this.store.pipe(select(selectTodo));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetTodo(this.route.snapshot.params.id));
  }

}
