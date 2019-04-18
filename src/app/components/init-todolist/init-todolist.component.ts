import { Component, OnInit, Inject, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetTodo } from 'src/app/store/actions/todolist.actions';
import { selectTodo } from 'src/app/store/selectors/todolist.selectors';
import { ITodolist } from 'src/app/models/todolist.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-todolist',
  templateUrl: './init-todolist.component.html',
  styleUrls: ['./init-todolist.component.scss']
})
export class InitTodolistComponent implements OnInit {
  @Input()
  todo: ITodolist;

  constructor(
    private router: Router
  ) {}

  ngOnInit() { }

  back() {
    this.router.navigate(['/']);
  }

}
