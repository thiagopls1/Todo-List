import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskComponent } from './dialog-edit-task.component';

describe('DialogEditTaskComponent', () => {
  let component: DialogEditTaskComponent;
  let fixture: ComponentFixture<DialogEditTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditTaskComponent]
    });
    fixture = TestBed.createComponent(DialogEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
