import { async, TestBed } from '@angular/core/testing';
import { InitTodolistComponent } from './init-todolist.component';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('InitTodolistComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule,
        StoreModule.forRoot(appReducers),
        RouterTestingModule
      ],
      declarations: [ InitTodolistComponent ]
    });
  }));

  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(InitTodolistComponent);
      const component = fixture.componentInstance;
      const router = fixture.debugElement.injector.get(RouterTestingModule);

      return { fixture, component, router };
    }

    it('should create the component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

  });

});
