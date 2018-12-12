import { Component, OnInit } from '@angular/core';
// import { AgmMarker } from '@agm/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public origin: any
  public destination: any
  constructor() { }

  ngOnInit() {
  }

  public coordinates: [
    {
     latitude: 24.799448,
     longitude: 120.979021,
    },
    {
      latitude: 24.799448,
      longitude: 120.979021,
     }
   ];

  getDirection() {
    this.origin = { lat: 24.799448, lng: 120.979021 }
    this.destination = { lat: 24.799524, lng: 120.975017 }

  }
}
