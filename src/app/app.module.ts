import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { FirstCharUpperCasePipe } from './firstcharuppercase.pipe';
import { LocationsComponent } from './locations/locations.component';
import { LocationService } from './locations/location.service';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCharUpperCasePipe,
    LocationsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR KEY'})
    ],
    providers: [LocationService],
    bootstrap: [AppComponent]
})
export class AppModule { }