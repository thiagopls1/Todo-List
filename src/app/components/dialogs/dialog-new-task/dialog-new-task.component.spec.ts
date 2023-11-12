import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewTaskComponent } from './dialog-new-task.component';

describe('DialogNewTaskComponent', () => {
  let component: DialogNewTaskComponent;
  let fixture: ComponentFixture<DialogNewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNewTaskComponent]
    });
    fixture = TestBed.createComponent(DialogNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
