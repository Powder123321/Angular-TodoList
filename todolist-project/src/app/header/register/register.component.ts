import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}
  registerform() {
    this.router.navigate(['/succes']);
  }
  log(x: any) {
    console.log(x);
  }
}
