import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodolist } from '../models/todolist.interface';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  /**
   * Get all from todolist
   */
  getTodolist(): Observable<ITodolist[]> {
    return this.http
      .get(`api/todolist`)
      .pipe(map(response => response as ITodolist[]));
  }

  /**
   * Update a given todo
   * @param id Id
   * @param todo Todo
   */
  updateTodo(todo: ITodolist): Observable<ITodolist[]> {
    return this.http
      .put(`api/todolist/${todo.id}`, todo)
      .pipe(map(response => response as ITodolist[]));
  }

  /**
   * Add a new todo
   * @param todo Todo
   */
  addTodo(todo: ITodolist): Observable<ITodolist> {
    return this.http
      .post(`api/todolist`, todo)
      .pipe(map(response => response as ITodolist));
  }
}
