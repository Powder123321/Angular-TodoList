import { DestinationServiceService } from './../../../FeatureAppToDo/shared/destination-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  destinations: string[] = [];

  constructor(private destinationserviceService: DestinationServiceService) {}

  ngOnInit(): void {
    this.destinations = this.destinationserviceService.getDestinations();
  }
}
