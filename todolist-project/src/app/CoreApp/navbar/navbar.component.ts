import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  goSchedule() {
    this.router.navigate(['/schedule']);
  }
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
  HolidayCompass() {
    this.router.navigate(['/bodycore']);
  }
  register() {
    this.router.navigate(['/register']);
  }
}
