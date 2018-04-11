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

  user = {
    email:'',
    password:''
  };

  constructor(
      public menu: MenuController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private jwtClient: JwtClientProvider,
      private auth:AuthProvider,
  ) {
    this.menu.enable(false);
  }

  login(){
    this.auth.login(this.user)
      .then(() => {
        this.affterLogin();
      });
  }

  affterLogin(){
    this.menu.enable(true);
    this.navCtrl.setRoot('HomePage');
  }

}
