import { RegisterService } from '../register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}
  registerform(
    password: string,
    username: string,
    email: string,
    confirmpassword: string
  ) {
    this.registerService
      .registerService(password, username, email, confirmpassword)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/succes']);
      });
  }
}
