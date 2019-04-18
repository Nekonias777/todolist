import { Action } from '@ngrx/store';
import { ITodolist } from '../../models/todolist.interface';

/**
 * Type of action
 */
export enum ETodolistActions {
    GetTodolist = '[Todolist] Get Todolist',
    GetTodolistSuccess = '[Todolist] Get Todolist Success',
    FinishTodo = '[Todolist] Finish Todo',
    FinishTodoSuccess = '[Todolist] Finish Todo Success'
}

export class GetTodolist implements Action {
    public readonly type = ETodolistActions.GetTodolist;
}

export class GetTodolistSuccess implements Action {
    public readonly type = ETodolistActions.GetTodolistSuccess;
    constructor(public payload: ITodolist[]) {}
}

export class FinishTodo implements Action {
    public readonly type = ETodolistActions.FinishTodo;
    constructor(public place: number, public payload: ITodolist) {}
}

export class FinishTodoSuccess implements Action {
    public readonly type = ETodolistActions.FinishTodoSuccess;
}

export type TodolistActions = GetTodolist | GetTodolistSuccess | FinishTodo | FinishTodoSuccess;
