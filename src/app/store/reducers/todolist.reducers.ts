import { initialTodolistState, ITodolistState } from '../state/todolist.state';
import { TodolistActions, ETodolistActions } from '../actions/todolist.actions';

/**
 * Reducer
 * @param state State
 * @param action Action
 */
export function todolistReducers(state = initialTodolistState, action: TodolistActions): ITodolistState {
    switch (action.type) {
        case ETodolistActions.GetTodolistSuccess: {
            return {
                ...state,
                todolist: action.payload
            };
        }
        default:
            return state;
    }
}
