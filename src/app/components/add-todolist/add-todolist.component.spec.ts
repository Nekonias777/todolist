import { async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AddTodolistComponent } from './add-todolist.component';
import { MatInputModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { ITodolist } from 'src/app/models/todolist.interface';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodo } from 'src/app/store/actions/todolist.actions';

describe('AddTodolistComponent', () => {

  const model: ITodolist  = {
    id: 0,
    title: 'Todo Test 1',
    description: 'This is the first test',
    date: new Date(),
    status: 'In progress'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatDialogModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducers)
      ],
      declarations: [ AddTodolistComponent ],
      providers: [
        {provide: MatDialogRef, useValue: { close: (dialogResult: any) => { }}},
        {provide: MAT_DIALOG_DATA, useValue: model}
      ]
    });
  }));

  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(AddTodolistComponent);
      const component = fixture.componentInstance;
      const store = fixture.debugElement.injector.get(Store);
      const dialogRef = fixture.debugElement.injector.get(MatDialogRef);

      return { fixture, component, store, dialogRef };
    }

    it('should create the component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should close the dialog when closeDialog is invoked', () => {
      const { component } = setup();
      const { fixture } = setup();
      const { dialogRef } = setup();
      spyOn(component, 'closeDialog');

      const button = fixture.debugElement.nativeElement.querySelector('.close-button');
      button.click();
      fixture.detectChanges();
      // expect(dialogRef.close()).toHaveBeenCalled();
    });

    it('should dispatch the AddTodo Action with the addTodolist', fakeAsync(() => {
      const { component } = setup();
      const { fixture } = setup();
      const { store } = setup();

      spyOn(component, 'addTodolist');

      const button = fixture.debugElement.nativeElement.querySelector('.submit-button');

      const action = new AddTodo({
        id: NaN,
        title: 'Exemple',
        description: '',
        date: new Date(),
        status: 'In progress'
      });
      const spy = spyOn(store, 'dispatch');
      button.click();
      tick();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalledWith(action);
    }));

  });
});
