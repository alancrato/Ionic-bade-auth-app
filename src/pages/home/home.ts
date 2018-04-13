import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from "../../decorators/auth.decorator";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

@Auth()
export class HomePage {

  catId: any = 1;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  )
  {}

  ionViewDidLoad() {
    console.log('HomePage');
  }

  catP() {
    if(this.catId == 1){
      return this.catId;
    }
    return 'error';

  }

}
