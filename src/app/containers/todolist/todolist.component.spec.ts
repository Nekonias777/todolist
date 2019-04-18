import { async, TestBed } from '@angular/core/testing';
import { TodolistComponent } from './todolist.component';
import { Store, StoreModule } from '@ngrx/store';
import { GetTodolist } from 'src/app/store/actions/todolist.actions';
import { MatCardModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatDialogModule } from '@angular/material';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrentTodolistComponent } from 'src/app/components/current-todolist/current-todolist.component';

describe('TodolistComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        StoreModule.forRoot(appReducers),
        RouterTestingModule
      ],
      declarations: [ TodolistComponent, CurrentTodolistComponent ],
    });
  }));

  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(TodolistComponent);
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
  });
});
