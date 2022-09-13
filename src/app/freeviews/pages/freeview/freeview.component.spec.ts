import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeviewComponent } from './freeview.component';

describe('FreeviewComponent', () => {
  let component: FreeviewComponent;
  let fixture: ComponentFixture<FreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
