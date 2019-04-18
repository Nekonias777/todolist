import * as fromReducer from './todolist.reducers';
import * as fromAction from './../actions/todolist.actions';
import { initialTodolistState } from '../state/todolist.state';

describe('todolistReducers', () => {
    const mockTodolistData = [
        {
            id: '0',
            title: 'Todo Test 1',
            description: 'This is the first test',
            date: new Date(),
            status: 'In progress'
        },
        {
            id: '1',
            title: 'Todo Test 2',
            description: 'This is the second test',
            date: new Date(),
            status: 'In progress'
        },
        {
            id: '2',
            title: 'Todo Test 3',
            description: 'This is the third test',
            date: new Date(),
            status: 'In progress'
        }
    ];

    describe(':', () => {
        it('should set todolist to action.payload', () => {
            const action = new fromAction.GetTodolistSuccess(mockTodolistData);
            const state = fromReducer.todolistReducers(initialTodolistState, action);
            expect(state.todolist).toBe(action.payload);
        });

        it('should set todolist to [...state.todolist, action.payload]', () => {
            initialTodolistState.todolist = mockTodolistData;
            const action = new fromAction.FinishTodo(1, mockTodolistData[1]);
            const state = fromReducer.todolistReducers(initialTodolistState, action);
            expect(state.todolist).toBe(state.todolist);
        });

        it('should set todolist to state.todolist', () => {
            const action = new fromAction.FinishTodoSuccess();
            const state = fromReducer.todolistReducers(initialTodolistState, action);
            expect(state.todolist).toBe(state.todolist);
        });
    });

});
