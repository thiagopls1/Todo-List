import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TaskComponent } from './components/task/task.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DialogNewTaskComponent } from './components/dialogs/dialog-new-task/dialog-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogNewTaskComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    CommonModule,
    HttpClientModule,
    TodoListComponent,
    ToolbarComponent,
    TaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
