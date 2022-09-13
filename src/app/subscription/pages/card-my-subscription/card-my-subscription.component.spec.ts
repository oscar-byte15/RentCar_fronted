import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMySubscriptionComponent } from './card-my-subscription.component';

describe('CardMySubscriptionComponent', () => {
  let component: CardMySubscriptionComponent;
  let fixture: ComponentFixture<CardMySubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMySubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMySubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
