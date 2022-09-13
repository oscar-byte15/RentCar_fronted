import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDateDialogComponent } from './edit-date-dialog.component';

describe('EditDateDialogComponent', () => {
  let component: EditDateDialogComponent;
  let fixture: ComponentFixture<EditDateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
