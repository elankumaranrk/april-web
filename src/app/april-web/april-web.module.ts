import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprilCardsComponent } from './april-cards/april-cards.component';
import { AprilFooterComponent } from './april-footer/april-footer.component';
import { AprilHeaderComponent } from './april-header/april-header.component';
import { AprilBotComponent } from './april-bot/april-bot.component';
import { AprilContainerComponent } from './april-container/april-container.component';
import { AprilWebService } from './april-web.service';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDF4SWIpepMmZV7V7fimmKxCJz3GZeh18w",
  authDomain: "april-web.firebaseapp.com",
  databaseURL: "https://april-web.firebaseio.com",
  storageBucket: "april-web.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [AprilCardsComponent, AprilFooterComponent, AprilHeaderComponent, AprilBotComponent, AprilContainerComponent],
  exports: [AprilContainerComponent],
  providers: [AprilWebService]
})
export class AprilWebModule { }
