import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user = { email: "test", password: "" };
  error: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  login() {
    if (this.validateEmail(this.user.email)) {
      this.error = null;
      this.authService.login(this.user).subscribe(response => {
        if (response && response.token) {
          this.router.navigate(["/private/scoreDisplay"]);
        } else {
          this.error = "Invalid username or password";
        }
        console.log(response);
      });
    } else {
      this.error = "This email is not valid";
      setTimeout(() => {
        this.error = null;
      }, 2000);
    }
  }
  isNotValid() {
    return !this.user.email || !this.user.password;
  }

  validateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
}
