import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StopPage } from '../pages/stop/stop';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { TogoPage } from '../pages/togo/togo';
import { FavPage } from '../pages/favorite/favorite';
import { UserPage } from '../pages/user/user';

@NgModule({
  declarations: [
    MyApp,
    StopPage,
    ItemDetailsPage,
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
    ItemDetailsPage,
    TogoPage,
    FavPage,
    UserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
