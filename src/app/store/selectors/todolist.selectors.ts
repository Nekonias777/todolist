import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITodolistState } from '../state/todolist.state';

const selectTodolists = (state: IAppState) => state.todolist;

export const selectTodolist = createSelector(
    selectTodolists,
    (state: ITodolistState) => state.todolist
);
