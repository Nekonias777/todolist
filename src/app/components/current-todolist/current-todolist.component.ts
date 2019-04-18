import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../../store/state/app.state';
import { FinishTodo } from './../../store/actions/todolist.actions';
import { ITodolist } from 'src/app/models/todolist.interface';
import { MatDialog } from '@angular/material';
import { AddTodolistComponent } from '../add-todolist/add-todolist.component';

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
    private store: Store<IAppState>,
    public dialog: MatDialog
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
   * Display the todo information
   * @param id Id of the todo
   */
  openTodo(id: number) {
    this.todo.emit(id);
  }

  /**
   * Open a dialog to add a new todo in the list
   */
  addTodo() {
    const dialogRef = this.dialog.open(AddTodolistComponent, {
      data: this.todolist.length,
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
