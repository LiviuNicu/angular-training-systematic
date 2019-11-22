import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../interfaces/user";
import { catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public url = environment.url;
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    // if (localStorage.getItem("token")) {
    //   return localStorage.getItem("token");
    // } else {
    //   return false;
    // }

    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      withCredentials: false
    };
  }
  register(data: User): Observable<any> {
    return this.http
      .post(this.url + "user/register", data, this.getHeaders())
      .pipe(
        tap(response => console.log(response)),
        catchError(this.handleError("register"))
      );
  }

  login(credentials): Observable<any> {
    return this.http
      .post(this.url + "user/login", credentials, this.getHeaders())
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            localStorage.setItem("token", response.token);
          }
        }),
        catchError(this.handleError("login"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //console.log(error);
      if (error.status == 401) {
      }

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
