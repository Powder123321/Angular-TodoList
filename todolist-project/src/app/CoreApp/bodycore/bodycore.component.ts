import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodycore',
  templateUrl: './bodycore.component.html',
  styleUrl: './bodycore.component.scss',
})
export class BodycoreComponent implements OnInit {
  featureHotel() {
    this.router.navigate(['/hotels']);
  }
  goDestinations() {
    this.router
      .navigate(['/destinations'])
      .catch((err) => console.log('Navigation Error', err));
  }
  constructor(private router: Router) {}
  todolist() {
    this.router
      .navigate(['/home'])
      .catch((err) => console.error('Navigation Error:', err));
  }
  ngOnInit(): void {}
}
