import { async, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './../../store/reducers/app.reducers';

import { CurrentTodolistComponent } from './current-todolist.component';
import { MatCardModule, MatDividerModule, MatCheckboxModule } from '@angular/material';
import { GetTodolist, FinishTodo } from './../../store/actions/todolist.actions';
import { By } from '@angular/platform-browser';

describe('CurrentTodolistComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule,
        MatCheckboxModule,
        StoreModule.forRoot(appReducers)
      ],
      declarations: [ CurrentTodolistComponent ]
    });
  }));

  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(CurrentTodolistComponent);
      const component = fixture.componentInstance;
      const store = fixture.debugElement.injector.get(Store);

      return { fixture, component, store };
    }

    it('should create the component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should dispatch the GetTodolist Action in the ngOnInit lifecycle', () => {
      const action = new GetTodolist();
      const { fixture } = setup();
      const { store } = setup();
      const spy = spyOn(store, 'dispatch');
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch the FinishTodo Action in the finishTodo button is clicked', () => {

    });
  });

});
