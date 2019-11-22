import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Player } from "../interfaces/player";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class GameService {
  public url = environment.url;
  private players = new BehaviorSubject<Player[]>([]);
  public playerAsObs = this.players.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        Authorization: "Bearer " + this.authService.getToken()
      })
    };
  }
  addPlayer(player: Player) {
    this.players.next([...this.players.getValue(), player]);
  }
  updatePlayers(players: Player[]) {
    this.players.next(players);
  }

  addToHistory(players: Player[]) {
    return this.http
      .post(this.url + "game/add", players, this.getHeaders())
      .pipe(
        tap(response => console.log(response)),
        catchError(this.handleError("addToHistory"))
      );
  }

  getHistory() {
    return this.http.get(this.url + "game/getHistory", this.getHeaders()).pipe(
      tap(response => console.log(response)),
      catchError(this.handleError("getHistory"))
    );
  }

  search(data): Observable<Player[]> {
    return this.http
      .post(this.url + "game/players/search", data, this.getHeaders())
      .pipe(
        tap(response => console.log(response)),
        catchError(this.handleError("search"))
      ) as Observable<Player[]>;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //console.log(error);
      if (error.status == 401) {
        localStorage.removeItem("token");
        this.updatePlayers([]);
        this.router.navigate(["/login"]);
      }

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
