import { LoginService } from './../../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.LoginService.currentUser.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  isLoggedIn = false;
  constructor(private router: Router, private LoginService: LoginService) {}

  Loginnav() {
    this.router.navigate(['/login']);
  }

  Logout() {
    this.LoginService.logoutService();
    this.isLoggedIn = false;
  }
  Lazylister() {
    this.router.navigate(['/about']);
  }
  register() {
    this.router.navigate(['/register']);
  }
  Reviews() {
    this.router.navigate(['/reviews']);
  }
}
