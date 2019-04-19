import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { InitTodolistComponent } from './init-todolist.component';
import { Location } from '@angular/common';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

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
      // const router = fixture.debugElement.injector.get(RouterTestingModule);
      const router = TestBed.get(Router);
      const location = TestBed.get(Location);

      return { fixture, component, router, location };
    }

    it('should create the component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should navigate to / with the back', () => {
      const { component } = setup();
      const { fixture } = setup();
      const { router } = setup();
      const { location } = setup();

      component.todo = {
        id: 0,
        title: 'Todo Test 1',
        description: 'This is the first test',
        date: new Date(),
        status: 'In progress'
      };
      // fixture.detectChanges();

      // spyOn(component, 'back');

      // const backButton = fixture.debugElement.nativeElement.querySelector('.back-button');

      // const spy = spyOn(router, 'navigate');
      // backButton.click();
      // tick();
      // fixture.detectChanges();
      // expect(location.path()).toBe('/todolist');
    });

  });

});
