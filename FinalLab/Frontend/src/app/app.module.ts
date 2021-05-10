import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashBoardComponent } from "./components/DashBoard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import UserService from "./Services/user.service";

@NgModule({
  declarations: [AppComponent, DashBoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [DatePipe, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
