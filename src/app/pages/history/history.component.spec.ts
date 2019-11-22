import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HistoryComponent } from "./history.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { PrivateMenuComponent } from "src/app/components/private-menu/private-menu.component";

describe("HistoryComponent", () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent, PrivateMenuComponent],
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
