import { TestBed } from '@angular/core/testing';

import { ProfesorGuard } from './profesor.guard';

describe('Profesor', () => {
  let guard: ProfesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
