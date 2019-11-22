import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Player } from "src/app/interfaces/player";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  @Input() currentPlayer: Player;
  @Input() playerNumber: number;
  @Input() winner: Player;
  @Output() scoreChanged: EventEmitter<Player> = new EventEmitter<Player>();
  constructor() {}

  ngOnInit() {}

  addToScore() {
    if (!this.winner) {
      this.currentPlayer.score++;
      this.scoreChanged.emit();
    }
  }
}
