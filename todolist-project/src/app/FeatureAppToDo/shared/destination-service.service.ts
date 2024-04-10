import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationServiceService {
  constructor() {}

  private destinations: string[] = [];

  addDestination(destination: string) {
    this.destinations.push(destination);
  }

  getDestinations(): string[] {
    return this.destinations;
  }
}
