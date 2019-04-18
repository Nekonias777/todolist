import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITodolistState } from '../state/todolist.state';

const selectTodos = (state: IAppState) => state.todolist;

export const selectTodolist = createSelector(
    selectTodos,
    (state: ITodolistState) => state.todolist
);
