import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { MenuComponent } from "./components/menu/menu.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { ScoreDisplayComponent } from "./pages/score-display/score-display.component";
import { HistoryComponent } from "./pages/history/history.component";
import { SearchComponent } from "./pages/search/search.component";
import { PrivateMenuComponent } from "./components/private-menu/private-menu.component";
import { PlayerComponent } from "./components/player/player.component";
import { HilightIsServingDirective } from "./directives/hilight-is-serving.directive";
import { IsServingFilterPipe } from "./pipes/is-serving-filter.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from "ngx-bootstrap/modal";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ScoreDisplayComponent,
    HistoryComponent,
    SearchComponent,
    PrivateMenuComponent,
    PlayerComponent,
    HilightIsServingDirective,
    IsServingFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
