import { TestBed } from '@angular/core/testing';

import { CocheClickedService } from './coche-clicked.service';

describe('CocheClickedService', () => {
  let service: CocheClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocheClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
