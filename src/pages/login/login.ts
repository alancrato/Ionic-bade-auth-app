import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { JwtClientProvider } from "../../providers/jwt-client";
import { AuthProvider } from "../../providers/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string;

  constructor(
      public menu: MenuController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private jwtClient: JwtClientProvider,
      private auth:AuthProvider,
  ) {}

  ionViewWilEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  login(){
    /*this.jwtClient
      .accessToken({email: this.email, password: this.password})
      .then((token) => {
        console.log(token)
    });*/
  }

}
