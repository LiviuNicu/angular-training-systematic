import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { MenuComponent } from "src/app/components/menu/menu.component";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserModule, By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { DebugElement } from "@angular/core";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginBtn: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, MenuComponent],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginBtn = fixture.debugElement.query(By.css("#loginBtn"));
    fixture.detectChanges();
  });

  it("email should be valid", () => {
    const validateEmail = component.validateEmail("test@test.com");
    expect(validateEmail).toBe(true);
  });
  it("email should be invalid", () => {
    const validateEmail = component.validateEmail("test");
    expect(validateEmail).toBe(false);
  });
  it("Login btn should be disabled", () => {
    expect(loginBtn.nativeElement.disabled).toBe(true);
  });
  it("Login btn should be enabled", () => {
    component.user.email = "test@test.com";
    component.user.password = "test";
    fixture.detectChanges();
    expect(loginBtn.nativeElement.disabled).toBe(false);
  });

  it("Email is not valid", () => {
    component.user.email = "test";
    component.user.password = "test";
    component.login();
    fixture.detectChanges();
    expect(component.error).toContain("This email is not valid");
  });
  it("Login button should have login text inside", () => {
    expect(loginBtn.nativeElement.innerHTML).toContain("Login");
  });
  it("Login function shuld be calld when you click login", () => {
    spyOn(component, "login");
    component.user.email = "test@test.com";
    component.user.password = "test";
    fixture.detectChanges();
    loginBtn.nativeElement.click();

    expect(component.login).toHaveBeenCalledTimes(1);
  });
});
