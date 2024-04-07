import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent implements OnInit {
  constructor() {}

  destinations: string[] = [];

  addDestination(destination: string) {
    this.destinations.push(destination);
    console.log(this.destinations);
  }

  ngOnInit() {}
}
