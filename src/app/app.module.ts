import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// enviroment - config firebase
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';

// services
import { HttpService } from '../shared/http.service';
import { AuthMicroService } from './services/auth-micro.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
  AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    AuthMicroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
