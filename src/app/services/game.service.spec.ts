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

  it("be able to retrieve players form API via POST", () => {
    const dummyPlayers: Player[] = [
      { name: "test1", score: 0, isServing: false, winner: false, _id: "" },
      { name: "test2", score: 0, isServing: false, winner: false, _id: "" }
    ];

    service.search({}).subscribe(players => {
      expect(players.length).toBe(2);
      expect(players).toEqual(dummyPlayers);
    });

    const requst = httpMock.expectOne(service.url + "game/players/search");
    expect(requst.request.method).toBe("POST");
    requst.flush(dummyPlayers);
  });

  it("shuld add one player to players", () => {
    const fakePlayer: Player = {
      name: "test",
      isServing: false,
      winner: false,
      score: 0,
      _id: ""
    };

    service.addPlayer(fakePlayer);
    service.playerAsObs.subscribe((players: Player[]) => {
      expect(players.length).toBe(1);
      expect(players).toEqual([fakePlayer]);
    });
  });
});
