import { HotelService } from '../../../FeatureAppToDo/shared/hotel.service';
import { DestinationServiceService } from './../../../FeatureAppToDo/shared/destination-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  destinations: string[] = [];
  hotels: string[] = [];

  constructor(
    private destinationserviceService: DestinationServiceService,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.destinations = this.destinationserviceService.getDestinations();
    this.hotels = this.hotelService.getHotels();
  }
}
