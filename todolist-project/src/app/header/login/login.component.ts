import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  password = '1234';
  username = 'Andrei';
  login() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {}
  constructor(private router: Router) {}
}
