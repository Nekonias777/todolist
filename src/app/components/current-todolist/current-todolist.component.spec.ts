import { async, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './../../store/reducers/app.reducers';

import { CurrentTodolistComponent } from './current-todolist.component';
import { MatCardModule, MatDividerModule, MatCheckboxModule } from '@angular/material';

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

  });

});
