import { Injectable } from '@angular/core';
import { BrowserXhr, Request, ResponseOptions, XHRBackend, XHRConnection, XSRFStrategy } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

/*
  Generated class for the DefaultXHRBackend provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DefaultXHRBackend extends XHRBackend{

  constructor(browserXHR: BrowserXhr, baseResponseOptions: ResponseOptions, xsrfStrategy: XSRFStrategy) {
    super(browserXHR, baseResponseOptions, xsrfStrategy);
  }

  createConnection(request: Request): XHRConnection {
    let xhrConnection = super.createConnection(request);
    xhrConnection.response = xhrConnection
        .response
        .map((response) => {
          //salva o token
          return response;
        })
        .catch(responseError => {
          //verifica se o status  401 e redireciona para o login
          return Observable.throw(responseError);
        });
    return xhrConnection;
  }

}
