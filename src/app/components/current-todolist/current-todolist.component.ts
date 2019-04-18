import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './../../store/state/app.state';
import { selectTodolist } from './../../store/selectors/todolist.selectors';
import { GetTodolist, FinishTodo } from './../../store/actions/todolist.actions';
import { ITodolist } from 'src/app/models/todolist.interface';

@Component({
  selector: 'app-current-todolist',
  templateUrl: './current-todolist.component.html',
  styleUrls: ['./current-todolist.component.scss']
})
export class CurrentTodolistComponent implements OnInit {

  todolist = this.store.pipe(select(selectTodolist));

  constructor(
    private store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodolist());
  }

  /**
   * End the chosen todo from the list
   * @param currentTodo The chosen todo to be ended
   */
  finishTodo(index: number, currentTodo: ITodolist) {
    this.store.dispatch(new FinishTodo(
      index,
      {
        id: currentTodo.id,
        title: currentTodo.title,
        description: currentTodo.description,
        date: currentTodo.date,
        status: 'Closed'
      }
    ));
  }

}
