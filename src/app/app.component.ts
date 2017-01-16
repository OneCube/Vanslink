import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { StopPage } from '../pages/stop/stop';
import { TogoPage } from '../pages/togo/togo';
import { FavPage } from '../pages/favorite/favorite';
import { UserPage } from '../pages/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page

  // TODO: 
  // if(!login) { show StopPage }
  // else { show FavPage }
  rootPage: any = FavPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Stops Nearby', component: StopPage },
      { title: 'Where To Go', component: TogoPage },
      { title: 'Favorite', component: FavPage },
      { title: 'Login', component: UserPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
