import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Task } from 'src/app/interfaces/task';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-dialog-new-task-dialog',
  templateUrl: './dialog-new-task.component.html',
  styleUrls: ['./dialog-new-task.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgFor
  ]
})
export class DialogNewTaskComponent {
  statuses: string[] = [
    "Todo",
    "InProgress",
    "Done"
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogNewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
