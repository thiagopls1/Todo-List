import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgFor]
})
export class TodoListComponent {
  
  Tasks: Task[] = [
    {
      title: "Get to work",
      status: "Todo"
    },
    {
      title: "Pick up groceries",
      status: "Todo"
    },
    {
      title: "Go home",
      status: "Todo"
    },
    {
      title: "Fall asleep",
      status: "Todo"
    },
    {
      title: "Answer messages",
      status: "InProgress"
    },
    {
      title: "Get up",
      status: "Done"
    },
    {
      title: "Bursh teeth",
      status: "Done"
    },
    {
      title: "Take a shower",
      status: "Done"
    },
    {
      title: "Check e-mail",
      status: "Done"
    },
    {
      title: "Walk dog",
      status: "Done"
    },
  ]

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
