import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './todo-list/todo-list.component'
// import { ckdDropList } from '@angular/material'
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    TodoListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
