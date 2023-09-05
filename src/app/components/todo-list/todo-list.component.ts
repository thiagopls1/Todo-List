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
import { Tasks } from 'src/app/mocks/mock-tasks';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CdkDrag, CdkDropList, NgFor, MatButtonModule, MatIconModule, TaskComponent, CommonModule]
})
export class TodoListComponent {
  
  Tasks: Task[] = Tasks;

  todo = this.Tasks.filter(t => t.status == "Todo");
  inprogress = this.Tasks.filter(t => t.status == "InProgress");
  done = this.Tasks.filter(t => t.status == "Done");

  checkStatus(task: Task, status: string): boolean{
      return (task.status == status);
  }

  drop(event: CdkDragDrop<Task[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      event.item.data.status = event.container.element.nativeElement.id
    } else {
      event.currentIndex--
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
      event.item.data.status = event.container.element.nativeElement.id
    }
    console.log(`currentIndex: ${event.currentIndex}`)
    console.log(this.Tasks)
  }

}
