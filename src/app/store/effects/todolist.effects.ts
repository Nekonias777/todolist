import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetTodolist, ETodolistActions, GetTodolistSuccess, FinishTodo, FinishTodoSuccess } from '../actions/todolist.actions';
import { switchMap } from 'rxjs/operators';
import { TodolistService } from 'src/app/services/todolist.service';
import { ITodolist } from '../../models/todolist.interface';
import { of } from 'rxjs';

@Injectable()
export class TodolistEffects {
    @Effect()
    getTodolist$ = this.actions$.pipe(
        ofType<GetTodolist>(ETodolistActions.GetTodolist),
        switchMap(() => this.todolistService.getTodolist()),
        switchMap((todolist: ITodolist[]) => {
            return of(new GetTodolistSuccess(todolist));
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

    constructor(
        private todolistService: TodolistService,
        private actions$: Actions
    ) {}
}
