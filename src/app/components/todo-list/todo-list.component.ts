import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/interfaces/task';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { Tasks } from 'src/app/mocks/mock-tasks';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CdkDrag, CdkDropList, NgFor, MatButtonModule, MatIconModule, TaskComponent, CommonModule, MatDialogModule]
})

// Dialog
// export class TaskDialog
// {
//   task!: Task; 

//   openDialog(): void {
//     const dialogRef = this.dialog.open(TaskDialog, {
//       data: this.task
//     });

//     this.dialogRef.afterClosed().
//   }

//   constructor(public dialog: MatDialog){ }
// }

// Page
export class TodoListComponent {

  Tasks: Task[] = Tasks;

  todo = this.Tasks.filter(t => t.status == "Todo");
  inprogress = this.Tasks.filter(t => t.status == "InProgress");
  done = this.Tasks.filter(t => t.status == "Done");

  checkStatus(task: Task, status: string): boolean {
    return (task.status == status);
  }


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
}
