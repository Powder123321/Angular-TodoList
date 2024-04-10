import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DestinationServiceService } from '../../FeatureAppToDo/shared/destination-service.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent implements OnInit {
  constructor(
    private destinationserviceService: DestinationServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  addDestinationinComponent(destination: string): void {
    this.destinationserviceService.addDestination(destination);
  }
}
