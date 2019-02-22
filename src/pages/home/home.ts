import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Sentry from 'sentry-cordova';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: any = {};
  constructor(public navCtrl: NavController) {}
  forgotPass() {
    this.navigatetoForgotPass('forgotpasspage');
  }
  login() {
    this.validateEmail(this.loginForm['email']);
  }

  validateEmail(e) {
    console.log(e.toString());
  }
  navigatetoForgotPass(page) {
    try {
      this.navCtrl.push(page);
    } catch (error) {
     console.log(error);
    }
  }
}
