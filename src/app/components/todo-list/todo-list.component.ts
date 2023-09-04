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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgFor, MatButtonModule, MatIconModule]
})
export class TodoListComponent {
  
  Tasks: Task[] = [
    {
      title: "Get to work",
      description: "The book is on the table",
      status: "Todo"
    },
    {
      title: "Pick up groceries",
      description: "The book is on the table",
      status: "Todo"
    },
    {
      title: "Go home",
      description: "The book is on the table",
      status: "Todo"
    },
    {
      title: "Fall asleep",
      description: "The book is on the table",
      status: "Todo"
    },
    {
      title: "Answer messages",
      description: "The book is on the table",
      status: "InProgress"
    },
    {
      title: "Get up",
      description: "The book is on the table",
      status: "Done"
    },
    {
      title: "Bursh teeth",
      description: "The book is on the table",
      status: "Done"
    },
    {
      title: "Take a shower",
      description: "The book is on the table",
      status: "Done"
    },
    {
      title: "Check e-mail",
      description: "The book is on the table",
      status: "Done"
    },
    {
      title: "Walk dog",
      description: "The book is on the table",
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
