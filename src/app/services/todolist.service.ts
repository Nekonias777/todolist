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
}
