import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Translink } from '../providers/translink';
import { MyApp } from './app.component';
import { StopPage } from '../pages/stop/stop';
import { StopDestinationPage } from '../pages/stop/stop-destination/stop-destination';
import { StopPathPage } from '../pages/stop/stop-path/stop-path';
//import { StopDetailPage } from '../pages/stop-info/stop-detail/stop-detail';
import { NearbyListPage } from '../pages/stop/nearby-list/nearby-list';
import { TogoPage } from '../pages/togo/togo';
import { FavPage } from '../pages/favorite/favorite';
import { UserPage } from '../pages/user/user';

@NgModule({
  declarations: [
    MyApp,
    StopPage,
    StopDestinationPage,
    StopPathPage,
    // StopDetailPage,
    NearbyListPage,
    TogoPage,
    FavPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StopPage,
    StopDestinationPage,
    StopPathPage,
    // StopDetailPage,
    NearbyListPage,
    TogoPage,
    FavPage,
    UserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Translink]
})
export class AppModule {}
