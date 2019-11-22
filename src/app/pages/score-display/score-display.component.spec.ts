import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ScoreDisplayComponent } from "./score-display.component";
import { PrivateMenuComponent } from "src/app/components/private-menu/private-menu.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Player } from "src/app/interfaces/player";
import { PlayerComponent } from "src/app/components/player/player.component";

describe("ScoreDisplayComponent", () => {
  let component: ScoreDisplayComponent;
  let fixture: ComponentFixture<ScoreDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScoreDisplayComponent,
        PrivateMenuComponent,
        PlayerComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
