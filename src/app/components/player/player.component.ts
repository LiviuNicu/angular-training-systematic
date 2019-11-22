import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Player } from "src/app/interfaces/player";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")])
    ])
  ],
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
