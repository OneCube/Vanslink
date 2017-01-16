import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NearbyListPage } from '../nearby-list/nearby-list';

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
