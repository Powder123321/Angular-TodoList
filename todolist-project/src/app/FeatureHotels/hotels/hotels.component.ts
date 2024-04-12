import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../FeatureAppToDo/shared/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
})
export class HotelsComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private hotelService: HotelService, private router: Router) {}

  addHotel(hotel: string) {
    this.hotelService.addHotelInComponent(hotel);
  }
}
