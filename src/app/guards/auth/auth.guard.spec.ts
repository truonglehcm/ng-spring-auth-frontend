import { TestBed, async, inject } from '@angular/core/testing';

import { AuthActiveGuard } from './auth.guard';

describe('AuthActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthActiveGuard]
    });
  });

  it('should ...', inject([AuthActiveGuard], (guard: AuthActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
