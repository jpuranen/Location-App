import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
      `<h1>{{title | firstcharuppercase}}</h1>
       <app-locations></app-locations>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locations-app';
}
