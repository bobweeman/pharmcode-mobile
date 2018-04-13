import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../../pages/common/app-error';
import { Observable } from 'rxjs/observable';
import { NotFoundError } from '../../pages/common/not-found-error';
import { BadInput } from '../../pages/common/bad-input';
import { Unauthorised } from '../../pages/common/unauthorised';
import { ConnectionRefused } from '../../pages/common/connection-refused';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private server = "http://localhost:8000/api/";
  private oauth = "http://localhost:8000/";

  constructor(public http: HttpClient) {

  }

  getAll(endpoint,jwt){
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.get(this.server+endpoint,{headers:config});
  }

  // use this to log into the application
  authenticate(endpoint, data) {
    // send a  post request on a single resource
    return this.http.post(this.oauth+endpoint, data);
  }

  // clear existing tokens
  // can also use this to logout
  clearDeadNiggaz(){
    localStorage.removeItem("token");
    localStorage.removeItem("client_id");
  }

  postStore(endpoint, data,jwt){
    // store a newly created resource
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.post(this.server + endpoint + "/", data, { headers: config });
  }

  postUpdate(endpoint,data,jwt){
    // update an existing record
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.patch(this.server + endpoint + "/", data, { headers: config });
  }

  getSingle(endpoint,id,jwt){
    // view  an existing record
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.get(this.server + endpoint + "/" + id,{ headers: config });
  }


  postSingle(endpoint, data) {
    // send a  post request on a single resource
    return this.http.post(this.server+endpoint + "/" , data);
  }

  destroySingle(endpoint,id,jwt){
    // delete an exisiting record
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.delete(this.server + endpoint + "/" + id, { headers: config });
  }

  // // error handling method
  // private handleOopses(error:Response){
  //   if (error.status === 400) {
  //     return Observable.throw(new BadInput(error.json()));
  //   }
  //   if (error.status === 401) {
  //     return Observable.throw(new Unauthorised());
  //   }
  //   if (error.status === 404) {
  //     return Observable.throw(new NotFoundError());
  //   }
  //   if (error.status === 421) {
  //     return Observable.throw(new ConnectionRefused());
  //   }
  //   return Observable.throw(new AppError(error));
  // }

}
