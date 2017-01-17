import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Translink provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Translink {
  data: any;

  constructor(private http: Http) {}

  /**
   * Get all stops nearby by geolocation info
   * @param
   *        lat: latitude of current location
   *        lng: longtitude of current
   */
  nearbyStopsByLocation(lat, lng) {

    return new Promise(resolve => {
      
      var url = "https://api.translink.ca/rttiapi/v1/stops?apikey=Kwqwi28lOEd4VGhOV1G7&lat=";
      // Reset headers to accept JSON
      let headers = new Headers({ 'Accept': 'application/json' });
      let opt = new RequestOptions({ headers: headers });

      this.http.get(url + lat + "&long=" + lng, opt)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }
  
  // TODO: get bus destination by route number
  /**
   * Get bus destination by route number.
   * @param
   *        num: the route number
   */
  getDestination(num) {
    return new Promise(resolve => {
      this.http.get("")
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

  // TODO: get all stops of the route by route number and destination
  /**
   * Get all stops of the route with destination
   * @param 
   *        num: the route number
   *        des: the destination
   */
  getAllStops(num, des) {
    return new Promise(resolve => {
      this.http.get("")
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }
}
