import { Action } from '@ngrx/store';
import { ITodolist } from '../../models/todolist.interface';

export enum ETodolistActions {
    GetTodolist = '[Todolist] Get Todolist',
    GetTodolistSuccess = '[Todolist] Get Todolist Success',
}

export class GetTodolist implements Action {
    public readonly type = ETodolistActions.GetTodolist;
}

export class GetTodolistSuccess implements Action {
    public readonly type = ETodolistActions.GetTodolistSuccess;
    constructor(public payload: ITodolist[]) {}
}

export type TodolistActions = GetTodolist | GetTodolistSuccess;
