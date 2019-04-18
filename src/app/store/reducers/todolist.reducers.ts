import { initialTodolistState } from '../state/todolist.state';
import { TodolistActions, ETodolistActions } from '../actions/todolist.actions';

/**
 * Reducer
 * @param state State
 * @param action Action
 */
export function todolistReducers(state = initialTodolistState, action: TodolistActions) {

    /**
     * Switch use to determine the type of action to apply
     */
    switch (action.type) {
        case ETodolistActions.GetTodolistSuccess: {
            return {
                ...state,
                todolist: action.payload
            };
        }
        case ETodolistActions.FinishTodo: {
            return {
                ...state,
                ...state.todolist.splice(action.place, 1),
                todolist: [...state.todolist, action.payload]
            };
        }
        case ETodolistActions.FinishTodoSuccess: {
            return state;
        }
        default:
            return state;
    }
}
