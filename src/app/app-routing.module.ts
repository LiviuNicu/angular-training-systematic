import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ScoreDisplayComponent } from "./pages/score-display/score-display.component";
import { HistoryComponent } from "./pages/history/history.component";
import { SearchComponent } from "./pages/search/search.component";
import { PublicGuard } from "./guards/public.guard";
import { PrivateGuard } from "./guards/private.guard";
import { GetHistoryDataGuard } from "./resolvers/get-history-data.guard";
import { DataNotSavedGuard } from "./guards/data-not-saved.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  // { path: "**", redirectTo: "/404", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [PublicGuard] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [PublicGuard]
  },
  {
    path: "private",
    children: [
      {
        path: "scoreDisplay",
        component: ScoreDisplayComponent,
        canActivate: [PrivateGuard],
        canDeactivate: [DataNotSavedGuard]
      },
      {
        path: "history/:playerName",
        component: HistoryComponent,
        canActivate: [PrivateGuard],

        resolve: {
          history: GetHistoryDataGuard
        }
      },
      {
        path: "search",
        component: SearchComponent,
        canActivate: [PrivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
