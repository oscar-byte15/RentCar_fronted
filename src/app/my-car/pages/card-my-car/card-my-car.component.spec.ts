import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyCarComponent } from './card-my-car.component';

describe('CardMyCarComponent', () => {
  let component: CardMyCarComponent;
  let fixture: ComponentFixture<CardMyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMyCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
