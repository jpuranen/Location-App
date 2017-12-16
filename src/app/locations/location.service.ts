
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../locations/interfaces/location';

@Injectable()
export class LocationService {

  private http: HttpClient
  
  constructor(http: HttpClient) { 
    this.http = http 
  }
  fetch(f: any) : void {
    this.http.get<Location[]>('http://localhost:8080/api/locations/').subscribe(f);
  }
  posti(ff: any, b: Object) : void {
    let res = this.http.post<Location>('http://localhost:8080/api/locations/',b).subscribe(ff);
  } 
  delete(id : number, success : any, error : any) {
    let url = 'http://localhost:8080/api/locations/' + id;
    console.log(url)
    this.http.delete(url, { observe: 'response', responseType: 'text' }).subscribe(success, error);
  }

  ngOnInit(): void {

    }


}