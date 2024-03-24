import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router, private loginService: LoginService) {}
  password: string = '';
  username: string = '';
  login() {
    this.loginService
      .login(this.username, this.password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/home']);
        // Dacă loginul este reușit, navighează către pagina dorită
      })
      .catch((error: any) => {
        // Gestionează cazurile de eroare
        console.error('Login failed', error);
      });
  }
}
