import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CdkDrag, CdkDropList, MatButtonModule, MatIconModule, NgFor]
})

export class TaskComponent {
  @Input() task!: Task;

  @Input() tasks!: Task[] | Task[];
  @Output() tasksChange = new EventEmitter<Task[]>();

  delete(){
    const index = this.tasks.indexOf(this.task, 0);
    this.tasks.splice(index, 1);
    this.tasksChange.emit(this.tasks);
  }
}
