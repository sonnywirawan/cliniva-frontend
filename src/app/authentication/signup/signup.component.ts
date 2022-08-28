import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "src/app/core/service/auth.service";
import { environment } from "src/environments/environment";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { Role } from "src/app/core/models/role";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { super(); }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", Validators.required],
      cpassword: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.authForm.invalid) {
      // stop here if form is invalid
      return;
    } else {
      this.loading = true;
      var form_value = this.authForm.value;
      if (form_value.password == form_value.cpassword) {
        return this.http
          .post<any>(`${environment.clinivaAuthUrl}/register`, {
            img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            email: form_value.email,
            password: form_value.password,
            firstName: form_value.firstName,
            lastName: form_value.lastName
          }).subscribe(() => {
            // Hit API Login to Get Token
            this.subs.sink = this.authService
              .login(form_value.email, form_value.password)
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
                    this.loading = false;
                    console.log('Invalid Login');

                    // this.error = "Invalid Login";
                  }
                },
                (error) => {
                  console.log(error);
                  // this.error = error;
                  this.submitted = false;
                  this.loading = false;
                }
              );
          }, (error) => {
            console.log(error);
            this.submitted = false;
            this.loading = false;
          });
        // this.router.navigate(["/admin/dashboard/main"]);
      } else {
        this.loading = false;
        this.submitted = false;
        return;
      }
    }
  }
}
