import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  private laravel = "http://127.0.0.1:8000/api/"
  private oauth = "http://127.0.0.1:8000/"

  // get single resource
  getSingle(endpoint,jwt){
  return  this.http.options(this.laravel+endpoint,{headers:{
      'Accept':"Application/json",
      'Authorization':"Bearer"+jwt
    }})
  }

  // get single resource
  authenticate(endpoint,data) {
     return this.http.post(this.oauth+endpoint,data);
  }



}
