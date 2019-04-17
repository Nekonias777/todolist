import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './../../store/state/app.state';
import { selectTodolist } from './../../store/selectors/todolist.selectors';
import { GetTodolist } from './../../store/actions/todolist.actions';

@Component({
  selector: 'app-current-todolist',
  templateUrl: './current-todolist.component.html',
  styleUrls: ['./current-todolist.component.scss']
})
export class CurrentTodolistComponent implements OnInit {

  todolist = this.store.pipe(select(selectTodolist));

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodolist());
  }

}
