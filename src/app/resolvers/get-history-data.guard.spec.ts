import { TestBed, async, inject } from "@angular/core/testing";

import { GetHistoryDataGuard } from "./get-history-data.guard";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

describe("GetHistoryDataGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHistoryDataGuard],
      imports: [BrowserModule, HttpClientTestingModule, RouterTestingModule]
    });
  });

  it("should ...", inject(
    [GetHistoryDataGuard],
    (guard: GetHistoryDataGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
