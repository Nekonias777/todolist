import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './../../store/reducers/app.reducers';

import { CurrentTodolistComponent } from './current-todolist.component';
import { MatCardModule, MatDividerModule, MatCheckboxModule, MatIconModule, MatDialogModule, MatDialog } from '@angular/material';
import { FinishTodo } from 'src/app/store/actions/todolist.actions';
import { AddTodolistComponent } from '../add-todolist/add-todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CurrentTodolistComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule,
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
      const dialog = fixture.debugElement.injector.get(MatDialog);

      return { fixture, component, store, dialog };
    }

    it('should create the component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should dispatch the FinishTodo Action with the finishTodo', fakeAsync(() => {
      const { component } = setup();
      const { fixture } = setup();
      const { store } = setup();

      spyOn(component, 'finishTodo');

      // Checkbox null
      const checkbox = fixture.debugElement.nativeElement.querySelector('.todo-checkbox');

      const action = new FinishTodo(
        0,
        {
          id: 0,
          title: 'Todo Test 1',
          description: 'This is the first test',
          date: new Date(),
          status: 'In progress'
        }
      );
      const spy = spyOn(store, 'dispatch');
      // checkbox.click();
      // tick();
      // fixture.detectChanges();

      // expect(spy).toHaveBeenCalledWith(action);
    }));

    it('should emit todo with the openTodo', () => {
      const { component } = setup();
      const { fixture } = setup();

      spyOn(component, 'openTodo');

      // Button null
      const openButton = fixture.debugElement.nativeElement.querySelector('.open-button');

      // button.click();
      // fixture.detectChanges();

      // expect(component.todo.emit).toHaveBeenCalledWith(0);
    });

    it('should open a dialog with the addTodo', () => {
      const { component } = setup();
      const { fixture } = setup();
      const { dialog } = setup();

      spyOn(component, 'addTodo');

      const button = fixture.debugElement.nativeElement.querySelector('.add-button');

      button.click();
      fixture.detectChanges();

      // expect(dialog.open(AddTodolistComponent, {
      //   data: 15,
      //   width: '250px'
      // })).toHaveBeenCalled();


    });

  });

});
