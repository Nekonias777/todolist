import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetTodolist, ETodolistActions, GetTodolistSuccess } from '../actions/todolist.actions';
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
        switchMap((todolistHttp: ITodolist[]) => {
            return of(new GetTodolistSuccess(todolistHttp));
        })
    );

    constructor(
        private todolistService: TodolistService,
        private actions$: Actions,
    ) {}
}
