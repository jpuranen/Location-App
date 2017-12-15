
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LocationResponse {
  id: number, latitude: number, longitude: number
  }

@Injectable()
export class LocationService {

  //locations: Object[] = [{id: 1, latitude: 50.00, longitude: 60.00}, 
  //  {id: 2, latitude: 51.00, longitude: 61.00}] 

  private http: HttpClient
  
  constructor(http: HttpClient) { 
    this.http = http 
  }
  fetch(f: Function) : void {
    this.http.get<LocationResponse[]>('http://localhost:8080/api/locations/').subscribe(f);
  }
  posti(ff: Function, b: Object) : void {
    let res = this.http.post<LocationResponse>('http://localhost:8080/api/locations/',b).subscribe(ff);
    //console.log("res: " + res)
  } 
  delete(id : number, success : Function, error : Function) {
    let url = 'http://localhost:8080/api/locations/' + id;
    console.log(url)
    this.http.delete(url, { observe: 'response', responseType: 'text' }).subscribe(success(), error());
  }

  ngOnInit(): void {
  /*  this.http.get('http://someurl/').subscribe(jsonObject => {
      console.log(jsonObject);      
    }); */
    }


}