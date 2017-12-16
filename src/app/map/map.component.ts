import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../locations/location.service';

interface Location {
  id: number, latitude: number, longitude: number
}

@Component({
  selector: 'app-map',
  template: `
  <!-- this creates a google map on the page with the given lat/lng from -->
  <!-- the component as the initial center of the map: -->
  <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="mapClicked($event)">>
    <agm-marker [label]="'M'" [title]="'lat: ' + location.latitude + ' lng: ' + location.longitude" [latitude]="location.latitude" [longitude]="location.longitude" *ngFor="let location of locations"></agm-marker>
  </agm-map>`,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() 
  locations: Location[]

 lat : number = 61.49911;
 lng : number = 23.78712;
 locationService : LocationService;

 constructor(locationService : LocationService) {
  this.locationService = locationService;
}
  ngOnInit() {
    //console.log("map.component.ngOnInit...")
  }
  ngOnChanges() {
    //console.log("map.component.ngOnChanges...")
  }
  mapClicked(event) {
    console.log("Clicked on map: Lat: " + event.coords.lat + " Lng: " + event.coords.lng)
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.sendToServer();
  }
  sendToServer() {
    console.log("map.component.sendToServer new coords...")
    let body = {"latitude": this.lat, "longitude": this.lng}
    this.locationService.posti((result) => {
      this.locations.push(result);
    }, body)
  }
}
