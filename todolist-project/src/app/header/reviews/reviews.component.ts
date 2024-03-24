import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  comments: any[] = [];
  constructor(http: HttpClient) {
    http
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((response) => {
        this.comments = response.slice(0, 5);
      });
  }
}
