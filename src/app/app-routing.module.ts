import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components

import { LoginComponent } from '../app/components/login/login.component'
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: '', component: LoginViewComponent},
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }