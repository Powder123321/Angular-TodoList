import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}

  Loginnav() {
    this.router.navigate(['/login']);
  }

  Logout() {
    this.router.navigate(['/about']);
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
