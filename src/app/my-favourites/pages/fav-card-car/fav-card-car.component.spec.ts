import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCardCarComponent } from './fav-card-car.component';

describe('FavCardCarComponent', () => {
  let component: FavCardCarComponent;
  let fixture: ComponentFixture<FavCardCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavCardCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCardCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
