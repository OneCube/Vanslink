import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NearbyListPage } from '../stop/nearby-list/nearby-list';

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
    // this.nav.push()
  }

  getNearby() {
    this.nav.push(NearbyListPage);
  }
}
