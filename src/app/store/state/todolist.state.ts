import { ITodolist } from 'src/app/models/todolist.interface';

export interface ITodolistState {
    todolist: ITodolist[];
    todo: ITodolist;
}

export const initialTodolistState: ITodolistState = {
    todolist: null,
    todo: null
};
