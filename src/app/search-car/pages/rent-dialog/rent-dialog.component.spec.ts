import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDialogComponent } from './rent-dialog.component';

describe('RentDialogComponent', () => {
  let component: RentDialogComponent;
  let fixture: ComponentFixture<RentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
