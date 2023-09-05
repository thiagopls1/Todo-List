import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
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

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgFor, MatButtonModule, MatIconModule]
})
export class TodoListComponent {
  
  Tasks: Task[] = Tasks;

  todo = this.Tasks.filter(t => t.status == "Todo");
  inprogress = this.Tasks.filter(t => t.status == "InProgress");
  done = this.Tasks.filter(t => t.status == "Done");
  
  drop(event: CdkDragDrop<Task[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      event.item.data.status = event.container.element.nativeElement.id
      console.log(event.item.data)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
      event.item.data.status = event.container.element.nativeElement.id
      console.log(event.item.data)
    }
  }
}
