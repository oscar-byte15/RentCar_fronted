import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterApiComponent } from './register-api.component';

describe('RegisterComponent', () => {
  let component: RegisterApiComponent;
  let fixture: ComponentFixture<RegisterApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
