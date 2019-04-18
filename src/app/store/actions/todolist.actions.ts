import { Action } from '@ngrx/store';
import { ITodolist } from '../../models/todolist.interface';

/**
 * Type of action
 */
export enum ETodolistActions {
    GetTodolist = '[Todolist] Get Todolist',
    GetTodolistSuccess = '[Todolist] Get Todolist Success',
    FinishTodo = '[Todolist] Finish Todo',
    FinishTodoSuccess = '[Todolist] Finish Todo Success',
    GetTodo = '[Todolist] Get Todo',
    GetTodoSuccess = '[Todolist] Get Todo Success',
    AddTodo = '[Todolist] Add Todo',
    AddTodoSuccess = '[Todolist] Add Todo Success',
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

export class GetTodo implements Action {
    public readonly type = ETodolistActions.GetTodo;
    constructor(public payload: number) {}
}

export class GetTodoSuccess implements Action {
    public readonly type = ETodolistActions.GetTodoSuccess;
    constructor(public payload: ITodolist) {}
}

export class AddTodo implements Action {
    public readonly type = ETodolistActions.AddTodo;
    constructor(public payload: ITodolist) {}
}

export class AddTodoSuccess implements Action {
    public readonly type = ETodolistActions.AddTodoSuccess;
    constructor(public payload: ITodolist) {}
}

export type TodolistActions = GetTodolist | GetTodolistSuccess | FinishTodo | FinishTodoSuccess | GetTodo | GetTodoSuccess | AddTodo | AddTodoSuccess;
