import { TestBed } from '@angular/core/testing';

import { RentCarService } from './rent-car.service';

describe('RentCarService', () => {
  let service: RentCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
