import { TestBed } from "@angular/core/testing";

import { GameService } from "./game.service";
import { BrowserModule } from "@angular/platform-browser";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Player } from "../interfaces/player";

describe("GameService", () => {
  let service: GameService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService],
      imports: [BrowserModule, HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.get(GameService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
