import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/interfaces/task';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Tasks } from 'src/app/mocks/mock-tasks';
import { TaskComponent } from '../task/task.component';
import { DialogNewTaskComponent } from '../dialogs/dialog-new-task/dialog-new-task.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [
    DialogNewTaskComponent,
    CdkDrag,
    CdkDropList,
    NgFor,
    MatButtonModule,
    MatIconModule,
    TaskComponent,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})

export class TodoListComponent {
  constructor(public dialog: MatDialog, private ref:ChangeDetectorRef) { }
  Tasks: Task[] = Tasks;

  ngOnInit() { this.ref.detectChanges(); }

  checkStatus(task: Task, status: string): boolean { return (task.status == status); }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) { // Same container
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.item.data.status = event.container.element.nativeElement.id;
      return;
    }

    if (event.currentIndex > event.previousIndex) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex - 1);
      event.item.data.status = event.container.element.nativeElement.id;
    }
    else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      event.item.data.status = event.container.element.nativeElement.id;
    }
  }

  openNewTaskDialog(): void {
    const dialogRef = this.dialog.open(DialogNewTaskComponent,
      { data: { title: '', description: '', status: '' } })

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.Tasks.unshift(result);
    })
  }
}
