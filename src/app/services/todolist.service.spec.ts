import { TestBed } from '@angular/core/testing';

import { TodolistService } from './todolist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { cpus } from 'os';

describe('TodolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [TodolistService]
    });
  });

  describe(':', () => {
    function setup() {
      const todolistService = TestBed.get(TodolistService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { todolistService, httpTestingController };
    }

    it('should get the todo list', () => {
      const { todolistService, httpTestingController } = setup();
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
      todolistService.getTodolist().subscribe(data => {
        expect(data.mapData).toEqual(mockTodolistData);
      });

      const req = httpTestingController.expectOne('api/todolist');

      expect(req.request.method).toBe('GET');

      req.flush({
        mapData: mockTodolistData
      });
    });

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});
