import { IonicErrorHandler } from 'ionic-angular';

import * as Sentry from 'sentry-cordova';
import { Injectable } from '@angular/core';

@Injectable()
export class SentryIonicErrorHandlerProvider extends IonicErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      Sentry.captureException(error.originalError || error);
    } catch (e) {
      console.error(e);
    }
  }
}
