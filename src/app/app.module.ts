import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  NbLayoutModule,
  NbInputModule,
  NbDatepickerModule,
  NbThemeModule,
  NbButtonModule,
} from "@nebular/theme";
import { NbDateFnsDateModule } from "@nebular/date-fns";
import { NbEvaIconsModule } from "@nebular/eva-icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({ format: "dd/MM/yyyy" }),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
