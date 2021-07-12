import { TestBed } from '@angular/core/testing';

import { SolService } from './sol.service';

describe('SolService', () => {
  let service: SolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
