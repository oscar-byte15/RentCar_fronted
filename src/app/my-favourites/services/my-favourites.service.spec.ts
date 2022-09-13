import { TestBed } from '@angular/core/testing';

import { MyFavouritesService } from './my-favourites.service';

describe('MyFavouritesService', () => {
  let service: MyFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
