import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetTodolist, ETodolistActions, GetTodolistSuccess, FinishTodo, FinishTodoSuccess, GetTodo, GetTodoSuccess } from '../actions/todolist.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { TodolistService } from 'src/app/services/todolist.service';
import { ITodolist } from '../../models/todolist.interface';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { selectTodolist } from '../selectors/todolist.selectors';

@Injectable()
export class TodolistEffects {
    @Effect()
    getTodolist$ = this.actions$.pipe(
        ofType<GetTodolist>(ETodolistActions.GetTodolist),
        switchMap(() => this.todolistService.getTodolist()),
        switchMap((todolist: ITodolist[]) => {
            const open = todolist.filter(todo => todo.status !== 'Closed');
            const closed = todolist.filter(todo => todo.status === 'Closed');
            const newtodolist = closed.concat(open);
            // console.log(newtodolist)

            return of(new GetTodolistSuccess(newtodolist.reverse()));
        })
    );

    @Effect()
    finishTodo$ = this.actions$.pipe(
        ofType<FinishTodo>(ETodolistActions.FinishTodo),
        switchMap((actions) => this.todolistService.updateTodo(actions.payload)),
        switchMap(() => {
            return of(new FinishTodoSuccess());
        })
    );

    @Effect()
    getTodo$ = this.actions$.pipe(
        ofType<GetTodo>(ETodolistActions.GetTodo),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectTodolist))),
        switchMap(([id, todos]) => {
          const selectedTodo = todos.filter(todo => todo.id === +id)[0];
          return of(new GetTodoSuccess(selectedTodo));
        })
    );

    constructor(
        private todolistService: TodolistService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) {}
}
