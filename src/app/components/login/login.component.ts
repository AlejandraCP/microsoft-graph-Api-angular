import { Component, OnInit } from '@angular/core';
import { AuthMicroService } from './../../services/auth-micro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthMicroService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }
}
