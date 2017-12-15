import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
      `<h1>{{title | firstcharuppercase}}</h1>
      <!-- <p>Today is {{ todayDate | date:'dd.mm.yyyy'}}</p> -->
      <app-locations></app-locations>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locations-app';
  //todayDate : Date = new Date();
}
