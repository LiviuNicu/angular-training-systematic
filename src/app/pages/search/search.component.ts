import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { Player } from "src/app/interfaces/player";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  public name: string = "";
  players: Player[];
  textChanged: Subject<string> = new Subject<string>();

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.search();
    this.textChanged.pipe(debounceTime(3000)).subscribe(model => {
      this.search();
    });
  }
  onFieldChange() {
    this.textChanged.next();
  }

  search() {
    this.gameService
      .search({ name: this.name })
      .subscribe((response: Player[]) => {
        this.players = response;
      });
  }
}
