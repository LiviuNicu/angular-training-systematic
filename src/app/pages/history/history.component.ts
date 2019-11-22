import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Player } from "src/app/interfaces/player";
import { GameService } from "src/app/services/game.service";
import { Observable } from "rxjs";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  public history;
  public players: Observable<Player[]>;
  public selectedPlayer = "all";
  allHistory: any;
  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.history = this.activatedRoute.snapshot.data.history;
    this.allHistory = JSON.parse(JSON.stringify(this.history || null));
    this.players = this.gameService.search({ name: "" });
    this.activatedRoute.params.subscribe(params => {
      this.selectedPlayer = params["playerName"];
      this.filterTable();
    });
  }
  changeRoute(obj) {
    this.router.navigate(["/private/history/" + obj.value]);
  }
  filterTable() {
    if (this.selectedPlayer != "all") {
      this.history = [];
      if (this.allHistory && this.allHistory.length) {
        this.allHistory.map(item => {
          item.players.map(player => {
            if (player.name === this.selectedPlayer) {
              this.history.push(item);
            }
            return player;
          });
          return item;
        });
      }
    } else {
      this.history = this.allHistory;
    }
  }
}
