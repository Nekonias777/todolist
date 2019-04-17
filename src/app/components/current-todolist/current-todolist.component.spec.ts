import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './../../store/reducers/app.reducers';

import { CurrentTodolistComponent } from './current-todolist.component';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { GetTodolist } from './../../store/actions/todolist.actions';

describe('CurrentTodolistComponent', () => {
  // let component: CurrentTodolistComponent;
  // let fixture: ComponentFixture<CurrentTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule,
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
  });

});
