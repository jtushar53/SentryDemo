import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as Sentry from 'sentry-cordova';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      Sentry.init({ dsn: 'https://ef5d05934d04411da3b7f3a516d6926b@sentry.io/1399735', release: "SentryDemo@1.0.3" });
      Sentry.configureScope(scope => {
        scope.setUser({
          email: 'jtushar53@gmail.com'
        });
      });
    });
  }
}

