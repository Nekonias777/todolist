import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './../../store/state/app.state';
import { selectTodolist } from './../../store/selectors/todolist.selectors';
import { GetTodolist, FinishTodo } from './../../store/actions/todolist.actions';
import { ITodolist } from 'src/app/models/todolist.interface';
import { MatDialog } from '@angular/material';
import { InitTodolistComponent } from '../init-todolist/init-todolist.component';

@Component({
  selector: 'app-current-todolist',
  templateUrl: './current-todolist.component.html',
  styleUrls: ['./current-todolist.component.scss']
})
export class CurrentTodolistComponent implements OnInit {
  @Input()
  todolist: ITodolist[];
  @Output()
  todo: EventEmitter<number> = new EventEmitter();

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
  }

  /**
   * End the chosen todo from the list
   * @param index index in the list
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

  /**
   * End the chosen todo from the list
   * @param currentTodo The chosen todo to be ended
   */
  openTodo(id: number) {
    this.todo.emit(id);
  }

}
