import { async, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { InitTodolistComponent } from 'src/app/components/init-todolist/init-todolist.component';
import { GetTodo } from 'src/app/store/actions/todolist.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('TodoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule,
        StoreModule.forRoot(appReducers),
        RouterTestingModule
      ],
      declarations: [ TodoComponent, InitTodolistComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: { id: 1}}
          }
        }
      ]
    });
  }));

  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(InitTodolistComponent);
      const component = fixture.componentInstance;
      const store = fixture.debugElement.injector.get(Store);
      return { fixture, component, store };
    }

    it('should create the component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    // it('should dispatch the GetTodo Action in the ngOnInit lifecycle', () => {
    //   const { fixture } = setup();
    //   const { store } = setup();
    //   const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    //   activatedRoute.testParamMap = {id: 0};
    //   const action = new GetTodo(activatedRoute);
    //   const spy = spyOn(store, 'dispatch');
    //   fixture.detectChanges();
    //   expect(spy).toHaveBeenCalledWith(action);
    // });
  });
});
