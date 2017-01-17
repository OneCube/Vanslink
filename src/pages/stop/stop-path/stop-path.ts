import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StopDetailPage } from '../stop-detail/stop-detail'

@Component({
  selector: 'page-stop-path',
  templateUrl: 'stop-path.html'
})
export class StopPathPage {
  selectedItem: any;
  items: Array<{ title: string, destination: string, stop: string}>;

  // TODO: 
  // 1. get current location data
  // 2. get data (all destination of the bus) returned from Translink API

  constructor(public nav: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    // TODO: get destination by Translink API
    
    this.items = [{ title: this.selectedItem.title, destination: 'Waterfront', stop: '' }, { title: this.selectedItem.title, destination: 'Waterfront', stop: ''}];
  }

  itemTapped(event, item) {
    // this.nav.push(StopPathPage, { item: item })
  }
}