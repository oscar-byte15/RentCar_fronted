import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySocialComponent } from './my-social.component';

describe('MySocialComponent', () => {
  let component: MySocialComponent;
  let fixture: ComponentFixture<MySocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
