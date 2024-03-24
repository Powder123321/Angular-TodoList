import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';
  login() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {}
  constructor(private router: Router, private LoginService: LoginService) {}

  allAccounts: { username: string; password: string }[] = [
    { username: '', password: '' },
    { username: '', password: '' },
    { username: '', password: '' },
  ];
}
