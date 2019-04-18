import { TestBed } from '@angular/core/testing';
import { GetTodolist, GetTodolistSuccess, FinishTodo, FinishTodoSuccess, ETodolistActions } from './todolist.actions';

describe('TodolistActions', () => {

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

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [

          ],
          providers: []
        });
    });

    describe('GetTodolist', () => {
        it('should create an action', () => {
            const action = new GetTodolist();

            expect({ ...action }).toEqual({
                type: ETodolistActions.GetTodolist
            });
        });
    });

    describe('GetTodolistSuccess', () => {
        it('should create an action', () => {
          const action = new GetTodolistSuccess(mockTodolistData);

          expect({ ...action }).toEqual({
            type: ETodolistActions.GetTodolistSuccess,
            payload: mockTodolistData,
          });
        });
    });

    describe('FinishTodo', () => {
        it('should create an action', () => {
          const action = new FinishTodo(0, mockTodolistData[0]);

          expect({ ...action }).toEqual({
            type: ETodolistActions.FinishTodo,
            place: 0,
            payload: mockTodolistData[0],
          });
        });
    });

    describe('FinishTodoSuccess', () => {
        it('should create an action', () => {
            const action = new FinishTodoSuccess();

            expect({ ...action }).toEqual({
              type: ETodolistActions.FinishTodoSuccess
            });
        });
    });

});
