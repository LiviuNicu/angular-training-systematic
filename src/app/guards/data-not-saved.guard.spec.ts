import { TestBed, async, inject } from '@angular/core/testing';

import { DataNotSavedGuard } from './data-not-saved.guard';

describe('DataNotSavedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataNotSavedGuard]
    });
  });

  it('should ...', inject([DataNotSavedGuard], (guard: DataNotSavedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
