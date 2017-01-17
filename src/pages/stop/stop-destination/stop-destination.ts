import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StopPathPage } from '../stop-path/stop-path'

@Component({
  selector: 'page-stop-destination',
  templateUrl: 'stop-destination.html'
})
export class StopDestinationPage {
  selectedItem: any;
  items: Array<{ title: string, destination: string}>;

  // TODO: get data (all destination of the bus) returned from Translink API

  constructor(public nav: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    // TODO: get destination by Translink API
    
    this.items = [{ title: this.selectedItem.title, destination: 'Waterfront'}, { title: this.selectedItem.title, destination: 'New Westminster Station'}];
  }

  itemTapped(event, item) {
    this.nav.push(StopPathPage, { item: item })
  }
}