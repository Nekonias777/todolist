import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTodolistComponent } from './components/current-todolist/current-todolist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './backend/in-memory-data.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { TodolistService } from './services/todolist.service';
import { EffectsModule } from '@ngrx/effects';
import { TodolistEffects } from './store/effects/todolist.effects';

import {
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import { InitTodolistComponent } from './components/init-todolist/init-todolist.component';
import { TodolistComponent } from './containers/todolist/todolist.component';
import { TodoComponent } from './containers/todo/todo.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTodolistComponent,
    InitTodolistComponent,
    TodolistComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TodolistEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    TodolistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
