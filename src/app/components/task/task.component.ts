import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Task } from 'src/app/interfaces/task';
import { DialogEditTaskComponent } from '../dialogs/dialog-edit-task/dialog-edit-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CdkDrag, CdkDropList, MatButtonModule, MatIconModule, NgFor, MatDialogModule]
})

export class TaskComponent {
  @Input() task!: Task;

  @Input() tasks!: Task[] | Task[];
  @Output() tasksChange = new EventEmitter<Task[]>();

  constructor(public dialog: MatDialog) {}

  openEditTaskDialog():void {
    const dialogRef = this.dialog.open(DialogEditTaskComponent,
      { data: { title: this.task.title, description: this.task.description, status: this.task.status } })

    dialogRef.afterClosed().subscribe(result => {
      const index = this.tasks.indexOf(this.task);
      console.log(result);
      this.tasks.splice(index, 1, result);
      console.log(this.tasks);
      this.tasksChange.emit(this.tasks);
    })
  }

  delete(){
    const index = this.tasks.indexOf(this.task);
    console.log(index);
    this.tasks.splice(index, 1);
    this.tasksChange.emit(this.tasks);
  }
}
