import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";
import * as moment from 'moment';
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from "@angular/router";
import { Role } from "src/app/core/models/role";
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: "update-dialog",
  templateUrl: "./update-dialog.component.html",
  styleUrls: ["./update-dialog.component.scss"],
})
export class UpdateDialogComponent implements OnInit {
  formdata: FormGroup
  userData: any
  updateProfileLoading: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
  ) { }

  ngOnInit() {
    this.formdata = this.formbuilder.group({
      id: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      // Doctor
      designation: new FormControl("", []),
      department: new FormControl("", []),
      education: new FormControl("", []),
      specialization: new FormControl("", []),
      degree: new FormControl("", []),
      joiningDate: new FormControl(moment(new Date()).format("DD-MM-YYYY"), []),
      // Patient
      age: new FormControl(null, []),
      maritalStatus: new FormControl("", []),
      bloodGroup: new FormControl("", []),
      bloodPressure: new FormControl("", []),
      sugger: new FormControl("", []),
      injury: new FormControl("", []),
      // Less img
    });

    this.authService.currentUser.subscribe((user: any) => {
      this.userData = user
      this.formdata.controls['id'].patchValue(user.id)
      this.formdata.controls['email'].patchValue(user.email)
      this.formdata.controls['firstName'].patchValue(user.firstName)
      this.formdata.controls['lastName'].patchValue(user.lastName)
    })

    this.formdata.get('role').valueChanges.subscribe(role => {
      console.log(role);

      if (role == 'doctor') {
        // Enable Validator for Doctor
        this.formdata.controls['designation'] = new FormControl("", [Validators.required]);
        this.formdata.controls['department'] = new FormControl("", [Validators.required]);
        this.formdata.controls['education'] = new FormControl("", [Validators.required]);
        this.formdata.controls['specialization'] = new FormControl("", [Validators.required]);
        this.formdata.controls['degree'] = new FormControl("", [Validators.required]);

        // Disable Validator for Patient
        this.formdata.removeControl('age');
        this.formdata.removeControl('maritalStatus');
        this.formdata.removeControl('bloodGroup');
        this.formdata.removeControl('bloodPressure');
        this.formdata.removeControl('sugger');
        this.formdata.removeControl('injury');
      } else if (role == 'patient') {
        // Enable Validator for Patient
        this.formdata.controls['age'] = new FormControl(null, [Validators.required]);
        this.formdata.controls['maritalStatus'] = new FormControl("", [Validators.required]);
        this.formdata.controls['bloodGroup'] = new FormControl("", [Validators.required]);
        this.formdata.controls['bloodPressure'] = new FormControl("", [Validators.required]);
        this.formdata.controls['sugger'] = new FormControl("", [Validators.required]);
        this.formdata.controls['injury'] = new FormControl("", [Validators.required]);

        // Disable Validator for Doctor
        this.formdata.removeControl('designation');
        this.formdata.removeControl('department');
        this.formdata.removeControl('education');
        this.formdata.removeControl('specialization');
        this.formdata.removeControl('degree');
        console.log(this.formdata);
      }
    })
  }

  applyDoctorOrPatientValue(value) {
    if (this.formdata.get('role').value == 'doctor') {
      this.formdata.patchValue({
        designation: value.designation,
        department: value.department,
        education: value.education,
        specialization: value.specialization,
        degree: value.degree,
      })
    } else if (this.formdata.get('role').value == 'patient') {
      this.formdata.patchValue({
        age: value.age,
        maritalStatus: value.maritalStatus,
        bloodGroup: value.bloodGroup,
        bloodPressure: value.bloodPressure,
        sugger: value.sugger,
        injury: value.injury,
      })
    }
    console.log(this.formdata);

  }

  updateProfile() {    
    return this.http
      .put<any>(`${environment.clinivaAuthUrl}/user/${this.formdata.value.id}`, {
        ...this.formdata.value,
        dateOfBirth: moment(this.formdata.get('dateOfBirth').value).format('DD-MM-YYYY')
      }).subscribe((result) => {
        // Hit API Update User
        result.accessToken = this.userData.accessToken
        localStorage.setItem("currentUser", JSON.stringify(result));
        this.authService.currentUserSubject.next(result)

        const role = result.role;
        if (role === Role.All || role === Role.Admin || role == Role.None) {
          this.router.navigate(["/admin/dashboard/main"]);
        } else if (role === Role.Doctor) {
          this.router.navigate(["/doctor/dashboard"]);
        } else if (role === Role.Patient) {
          this.router.navigate(["/patient/dashboard"]);
        } else {
          this.router.navigate(["/authentication/signin"]);
        }
        this.dialogRef.close();
        this.updateProfileLoading = false;
      }, err => {
        console.log('err', err);
        this.updateProfileLoading = false;
      })
  }

}
