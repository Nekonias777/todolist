import { Component, Input } from '@angular/core';
import { ITodolist } from 'src/app/models/todolist.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-todolist',
  templateUrl: './init-todolist.component.html',
  styleUrls: ['./init-todolist.component.scss']
})
export class InitTodolistComponent {
  @Input()
  todo: ITodolist;

  constructor(
    private router: Router
  ) {}

  /**
   * Return to the list of todo
   */
  back() {
    this.router.navigate(['/']);
  }

}
