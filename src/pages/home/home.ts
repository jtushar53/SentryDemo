import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: any = {};
  constructor(public navCtrl: NavController) {}
  forgotPass() {}
  login() {
    this.validateEmail(this.loginForm['email']);
  }

  validateEmail(e) {
    console.log(e.toString());
  }
}
