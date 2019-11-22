import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterComponent } from "./register.component";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MenuComponent } from "src/app/components/menu/menu.component";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  function updateForm(name, email, password, confirm_password) {
    component.myForm.controls["name"].setValue(name);
    component.myForm.controls["email"].setValue(email);
    component.myForm.get(["passwords", "password"]).setValue(password);
    component.myForm
      .get(["passwords", "confirm_password"])
      .setValue(confirm_password);
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent, MenuComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css("form"));
        el = de.nativeElement;
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("empty form should be invalid", () => {
    updateForm("", "", "", "");
    expect(component.myForm.valid).toBe(false);
  });
  it("empty form should be valid", () => {
    updateForm("test", "test@test.com", "12345", "12345");
    expect(component.myForm.valid).toBe(true);
  });
  it("form should be invalid becouse email is invalid", () => {
    updateForm("test", "test", "12345", "12345");
    expect(component.myForm.valid).toBe(false);
    expect(component.myForm.controls["email"].getError("email")).toBeTruthy();
  });
});
