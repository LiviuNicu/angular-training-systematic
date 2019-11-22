import { TestBed, async, inject } from "@angular/core/testing";

import { PrublicGuard } from "./prublic.guard";

describe("PrublicGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrublicGuard]
    });
  });

  // it('should ...', inject([PrublicGuard], (guard: PrublicGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
