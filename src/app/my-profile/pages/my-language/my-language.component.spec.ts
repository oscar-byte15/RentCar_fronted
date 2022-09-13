import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLanguageComponent } from './my-language.component';

describe('MyLanguageComponent', () => {
  let component: MyLanguageComponent;
  let fixture: ComponentFixture<MyLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
