import { TestBed } from '@angular/core/testing';

import { Names } from './names';

describe('Names', () => {
  let service: Names;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Names);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
