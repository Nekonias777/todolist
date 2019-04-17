import { RouterReducerState } from '@ngrx/router-store';
import { ITodolistState, initialTodolistState } from './todolist.state';

export interface IAppState {
    router?: RouterReducerState;
    todolist: ITodolistState;
}

export const initialAppState: IAppState = {
    todolist: initialTodolistState
};

export function getInitialState(): IAppState {
    return initialAppState;
}