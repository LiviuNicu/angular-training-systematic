import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Player } from "src/app/interfaces/player";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-score-display",
  templateUrl: "./score-display.component.html",
  styleUrls: ["./score-display.component.scss"]
})
export class ScoreDisplayComponent implements OnInit {
  public players: Player[] = [];
  public newPlayer: Player = {
    _id: "",
    name: "",
    score: 0,
    isServing: false,
    winner: false
  };
  private playerSubscription;
  winner: Player;
  constructor(
    private authService: AuthService,
    private gameSerice: GameService
  ) {}

  ngOnInit() {
    this.playerSubscription = this.gameSerice.playerAsObs.subscribe(
      (players: Player[]) => {
        this.players = players;
        console.log(this.players);
      }
    );
  }
  addPlayer(player: Player) {
    const playerToAdd = JSON.parse(JSON.stringify(player));
    this.gameSerice.addPlayer(playerToAdd);
    this.newPlayer = {
      _id: "",
      name: "",
      score: 0,
      isServing: false,
      winner: false
    };
  }

  updatePlayer() {
    let sum = this.players.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.score);
    }, 0);

    if (sum % 5 == 0) {
      this.players.map(item => {
        item.isServing = !item.isServing;
        return item;
      });
    }
    this.verifyWinner();
    this.gameSerice.updatePlayers(this.players);
  }

  verifyWinner() {
    this.winner = this.players.find(item => item.score === 21);
    if (this.winner) {
      this.addToHistory();
    }
  }
  addToHistory() {
    this.gameSerice.addToHistory(this.players).subscribe(resopnse => {
      console.log(resopnse);
    });
  }
  logout() {
    this.authService.logout();
  }

  newPlayers() {
    this.winner = null;
    this.gameSerice.updatePlayers([]);
  }
  resetScore() {
    this.players.map(item => {
      item.score = 0;
      return item;
    });
    this.winner = null;
    this.gameSerice.updatePlayers(this.players);
  }

  canExit(): boolean {
    if (confirm("You have unsaved data!!")) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }
}
