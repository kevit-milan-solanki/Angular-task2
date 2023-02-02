import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { DetailFormComponent } from './detail-form/detail-form.component';
import { DetailComponent } from './detail-form/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailFormComponent,
    DetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
