import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { PatientService } from "../../patient.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Patient } from "../../patient.model";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  patientForm: FormGroup;
  patient: Patient;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.patient.name;
      this.patient = data.patient;
    } else {
      this.dialogTitle = "New Patient";
      this.patient = new Patient({});
    }
    this.patientForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
        ? "Not a valid email"
        : "";
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.patient.id],
      img: [this.patient.img],
      firstName: [this.patient.firstName],
      gender: [this.patient.gender],
      dateOfBirth: [this.patient.dateOfBirth],
      // dateOfBirth: [
      //   formatDate(this.patient.dateOfBirth, "dd-MM-yyyy", "en"),
      //   [Validators.required],
      // ]
      bloodGroup: [this.patient.bloodGroup],
      mobile: [this.patient.mobile],
      address: [this.patient.address],
      sugger: [this.patient.sugger],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.patientService.addPatient(this.patientForm.getRawValue());
  }
}
