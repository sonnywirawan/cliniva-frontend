import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DragulaModule } from "ng2-dragula";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { AppsRoutingModule } from "./apps-routing.module";
import { ChatComponent } from "./chat/chat.component";
import { ContactGridComponent } from "./contact-grid/contact-grid.component";
import { SupportComponent } from "./support/support.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";

import { MatRadioModule } from "@angular/material/radio";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { ComponentsModule } from "../shared/components/components.module";

@NgModule({
  declarations: [
    ChatComponent,
    ContactGridComponent,
    SupportComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    PerfectScrollbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSnackBarModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSortModule,
    MatToolbarModule,
    MaterialFileInputModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatRadioModule,
    DragulaModule.forRoot(),
    ComponentsModule,
  ],
})
export class AppsModule {}
