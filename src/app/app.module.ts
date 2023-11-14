import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TaskComponent } from './components/task/task.component'
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DialogNewTaskComponent } from './components/dialogs/dialog-new-task/dialog-new-task.component';
import { DialogEditTaskComponent } from './components/dialogs/dialog-edit-task/dialog-edit-task.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    CommonModule,
    NgFor,
    NgIf,
    HttpClientModule,
    TodoListComponent,
    ToolbarComponent,
    TaskComponent,
    DialogNewTaskComponent,
    DialogEditTaskComponent,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
