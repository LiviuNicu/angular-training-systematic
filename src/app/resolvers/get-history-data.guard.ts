import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { GameService } from "../services/game.service";

@Injectable({
  providedIn: "root"
})
export class GetHistoryDataGuard implements Resolve<any> {
  constructor(private gameService: GameService) {}

  resolve(): Observable<any> {
    return this.gameService.getHistory();
  }
}
