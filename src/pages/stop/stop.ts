import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NearbyListPage } from '../nearby-list/nearby-list';

// declare var google;

// @Component({
//   templateUrl: 'stop-detail.html'
// })
// export class StopDetailPage {
//   items = [];
  
//   constructor(params: NavParams) {
//     // this.items = params.data.items;
//   }
//     // TODO: 
//     // 1. get data (specific bus) returned from Translink API
//   // 2. display data in google maps
//   /*@ViewChild('map') mapElement: ElementRef;
//   map: any;
  
//   ionViewLoaded(){
//     this.loadMap();
//   }
 
//   loadMap(){
 
//     let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
//     let mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
 
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//   }*/
// }


@Component({
  selector: 'page-stop',
  templateUrl: 'stop.html'
})
export class StopPage {
  busNum;
  items = [];

  constructor(public nav: NavController) {

  }

  searchBusNumber(busNum) {
    
    // this.nav.push(StopDetailPage, {
    //   // TODO: what should I put here
    // });
  }

  getNearby() {
    this.nav.push(NearbyListPage);
  }
}
