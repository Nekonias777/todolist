import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { AddTodo } from 'src/app/store/actions/todolist.actions';

@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.scss']
})
export class AddTodolistComponent {

  constructor(
    public dialogRef: MatDialogRef<AddTodolistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private store: Store<IAppState>
  ) { }

  /**
   * Close the dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  /**
   * Add a new todo to the list
   * @param tit Title of the todo
   * @param desc Description of the todo
   */
  addTodolist(tit: string, desc: string): void {
    const todoToAdd = { id: this.data++, title: tit, description: desc, date: new Date(), status: 'In progress' };
    this.store.dispatch(new AddTodo(todoToAdd));
    this.dialogRef.close();
  }

}
