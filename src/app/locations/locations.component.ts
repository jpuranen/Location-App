import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';

import {Http, Response} from '@angular/http';
interface LocationResponse {
  id: number, latitude: number, longitude: number
}

interface Location {
  id: number, latitude: number, longitude: number
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  

  locations: Location[] = []
  locationService : LocationService;
  latitude : number;
  longitude : number;
  idtoberemoved : number = -1;

 
  constructor(locationService : LocationService) {
    this.locationService = locationService;
  }

ngOnInit() { 
  //console.log("locations.component.ngOnInit...")
  this.locationService.fetch((result) => this.locations = result);
} 
sendToServer() {
  console.log("locations.component.sendToServer sending coords...")
  let body = {"latitude": this.latitude, "longitude": this.longitude}
  this.locationService.posti((result) => {this.locations.push(result)}, body);
} 
delete(id : number) {
  console.log("locations.component.delete...")
  this.idtoberemoved = id;
  this.locationService.delete(id, this.success.bind(this), this.error.bind(this));
}
error(err : HttpErrorResponse) {
  this.idtoberemoved = -1;
  console.log("Delete did not succeed: " + err)
}
success(response : HttpResponse<string>) {
  console.log("Delete succeeded: id#" + this.idtoberemoved)

  for (let loc of this.locations) {
    if (loc.id === this.idtoberemoved) {
      //console.log("Index of removed location: " + this.locations.indexOf(loc))
      this.locations.splice(this.locations.indexOf(loc),1)
    }
  }
}
  
}
