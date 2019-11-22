import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  submited: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", Validators.required],
      passwords: this.formBuilder.group(
        {
          password: ["", [Validators.required, Validators.minLength(5)]],
          confirm_password: ["", [Validators.required, Validators.minLength(5)]]
        },
        { validator: this.PasswordConfirming }
      )
    });
  }

  PasswordConfirming(g: AbstractControl): { invalid: boolean } {
    if (g.get("password").value !== g.get("confirm_password").value) {
      return { invalid: true };
    }
  }

  doRegister() {
    this.submited = true;
    const form = this.myForm;
    //debugger;
    console.log(form);
    if (form.valid) {
      this.authService.register(form.value).subscribe(response => {
        if (response && response.success) this.router.navigate(["/login"]);
      });
    }
  }

  get f() {
    return this.myForm.controls;
  }
}
