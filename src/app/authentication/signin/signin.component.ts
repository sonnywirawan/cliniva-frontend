import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
// import axios from 'axios';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["admin@email.com", Validators.required],
      password: ["password", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get("email").setValue("admin@email.com");
    this.authForm.get("password").setValue("password");
  }
  doctorSet() {
    this.authForm.get("email").setValue("doctor@email.com");
    this.authForm.get("password").setValue("password");
  }
  patientSet() {
    this.authForm.get("email").setValue("patient@email.com");
    this.authForm.get("password").setValue("password");
  }
  async onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    if (this.authForm.invalid) {
      this.error = "Email and Password not valid !";
      return;
    } else {
      // await axios.post('https://lucky-voice-0294.us-east1.kalix.app:443', {
      //   email: this.f.email.value,
      //   password: this.f.password.value
      // }).catch(error => {
      //   console.log(error);
      // })
      this.subs.sink = this.authService
        .login(this.f.email.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              const role = this.authService.currentUserValue.role;
              if (role === Role.All || role === Role.Admin || role == Role.None) {
                this.router.navigate(["/admin/dashboard/main"]);
              } else if (role === Role.Doctor) {
                this.router.navigate(["/doctor/dashboard"]);
              } else if (role === Role.Patient) {
                this.router.navigate(["/patient/dashboard"]);
              } else {
                this.router.navigate(["/authentication/signin"]);
              }
              this.loading = false;
            } else {
              this.error = "Invalid Login";
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          }
        );
    }
  }
}
