import { TestBed } from '@angular/core/testing';

import { LucrariService } from './lucrari.service';

describe('LucrariService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LucrariService = TestBed.get(LucrariService);
    expect(service).toBeTruthy();
  });
});
