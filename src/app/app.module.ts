import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    TodoListComponent,
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
