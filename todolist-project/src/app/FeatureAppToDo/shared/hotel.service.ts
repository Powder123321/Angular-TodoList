import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotels: string[] = [];

  addHotelInComponent(hotels: string) {
    this.hotels.push(hotels);
  }

  getHotels(): string[] {
    return this.hotels;
  }

  constructor() {}
}
