import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './pages/nav/nav.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './pages/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { NewTodoComponent } from './pages/new-todo/new-todo.component';

@NgModule({
  declarations: [AppComponent, NavComponent,TodosComponent,TodoItemComponent,NewTodoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
