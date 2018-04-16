import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Auth } from "../../decorators/auth.decorator";
import { AuthHttp } from "angular2-jwt";
import 'rxjs/add/operator/toPromise';

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
      public authHttp: AuthHttp
  )
  {}

  ionViewDidLoad() {
      this.authHttp.get('http://localhost:8000/api/user')
          .toPromise()
          .then(() => {
              console.log('primeira');
          });
      /*setInterval(() => {
          this.authHttp.get('http://localhost:8000/api/user')
              .toPromise()
              .then(() => {
                  console.log('primeira');
              });
          this.authHttp.get('http://localhost:8000/api/user')
              .toPromise()
              .then(() => {
                  console.log('segunda');
              });
          this.authHttp.get('http://localhost:8000/api/user')
              .toPromise()
              .then(() => {
                  console.log('terceira');
              });
      },60*1000+1);*/
  }
}
