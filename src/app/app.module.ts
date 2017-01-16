import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StopPage } from '../pages/stop/stop';
// import { StopDetailPage } from '../pages/stop-detail/stop-detail';
import { NearbyListPage } from '../pages/nearby-list/nearby-list';
import { TogoPage } from '../pages/togo/togo';
import { FavPage } from '../pages/favorite/favorite';
import { UserPage } from '../pages/user/user';

@NgModule({
  declarations: [
    MyApp,
    StopPage,
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
    // StopDetailPage,
    NearbyListPage,
    TogoPage,
    FavPage,
    UserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
