import { Injectable } from '@angular/core';
import { JwtClientProvider } from "./jwt-client";
import { JwtPayload } from "../models/jwt-payload";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private _user = null;

  constructor(public jwtClient: JwtClientProvider) {
    this.user().then((user) => {
      console.log(user);
    });
  }

  user(): Promise<Object>{
    return new Promise((resolve) => {
      if(this._user){
        resolve(this._user);
      }
      this.jwtClient.getPayload().then((payload:JwtPayload) => {
          this._user = payload.user;
          resolve(this._user);
      })
    });
  }

}
