import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { NgApexchartsModule } from "ng-apexcharts";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UpdateDialogComponent } from "./update-dialog/update-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateDoctorComponent } from "./update-dialog/templates/update-doctor/update-doctor.component";
import { UpdatePatientComponent } from "./update-dialog/templates/update-patient/update-patient.component";

@NgModule({
  declarations: [MainComponent, Dashboard2Component, UpdateDialogComponent,
  UpdateDoctorComponent, UpdatePatientComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
    SharedModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule 
    
  ],
})
export class DashboardModule { }
